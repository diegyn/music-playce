# MusicPlayce – Prova Técnica Backend

## Como rodar o projeto

### Parte01

cd parte01
cd functions
npm install
firebase emulators:start

### Parte02

cd parte02
npm install
npm run migrate
npm run dev

### Parte03

```

SELECT song_id, COUNT(\*) AS qtd_tocada
FROM plays
WHERE played_at >= NOW() - INTERVAL '30 days'
GROUP BY song_id
ORDER BY qtd_tocada DESC
LIMIT 10;

criaria um indice composto para played_at e song_id para otimizar a consulta

CREATE INDEX idx_plays_played_at_song(played_at, song_id);

### Parte04
```

Talvez seria interessante migrar o function para um microserviço em node e conectar o banco ao prisma.
Usar jwt + OAuth2 para auth, RBAC para autorização.
HTTPS para segurança, validação de entrada e rate limiting.
Também poderia escalar usando docker
