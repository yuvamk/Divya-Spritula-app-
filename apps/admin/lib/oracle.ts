import oracledb from "oracledb"

oracledb.initOracleClient({ libDir: process.env.ORACLE_CLIENT_LIB })

let pool: oracledb.Pool | null = null

export async function getPool() {
  if (!pool) {
    pool = await oracledb.createPool({
      user:          process.env.ORACLE_USER!,
      password:      process.env.ORACLE_PASSWORD!,
      connectString: process.env.ORACLE_CONNECTION_STRING!,
      poolMin:       2,
      poolMax:       10,
      poolIncrement: 1,
    })
  }
  return pool
}

export async function query<T>(sql: string, binds: any[] = []): Promise<T[]> {
  const pool = await getPool()
  const conn = await pool.getConnection()
  try {
    const result = await conn.execute(sql, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
      fetchArraySize: 100
    })
    return result.rows as T[]
  } finally {
    await conn.close()
  }
}
