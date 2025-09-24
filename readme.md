# 🎵 MusicPlayce – Prova Técnica Backend

## 🚀 Como rodar o projeto

### 📁 Parte 01 – Firebase Functions

```
cd parte01/functions
npm install
firebase emulators:start
```

### 📁 Parte 02 – API

```
cd parte02
npm install
npm run migrate
npm run dev
```

### 📊 Parte 03 – Consulta SQL + Otimização

Consulta para top 10 músicas mais tocadas nos últimos 30 dias:

```
SELECT song_id, COUNT(*) AS qtd_tocada
FROM plays
WHERE played_at >= NOW() - INTERVAL '30 days'
GROUP BY song_id
ORDER BY qtd_tocada DESC
LIMIT 10;
```

Otimização: Criar índice composto para melhorar a performance:

```
CREATE INDEX idx_plays_played_at_song ON plays (played_at, song_id);
```

### 🔄 Parte 04 – Sugestão de Arquitetura

```
Migraria as funções para microserviços em Node.js com Prisma e PostgreSQL.
Autenticação com JWT + OAuth2, controle de acesso por roles (RBAC).
Segurança com HTTPS, validação de entrada e rate limiting.
Escalabilidade com Docker, e monitoramento com logs e métricas.
```
