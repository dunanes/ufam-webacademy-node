import { cleanEnv, port, str } from "envalid";

function validateEnv() {
    cleanEnv(process.env, {
        PORT: port(),
        NODE_ENV: str()
    });
}

export default validateEnv; // Por que export default? Pra não ter que especificar a função no index.ts, só chamar o arquivo.
// Caso contrário teria que chamar o arquivo tipo import { validateEnv } from /src/utils/validateEnv.ts