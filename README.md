# Typescript bug reproduction

PNPM + TURBO + TRCP

Just run the following commands to initialize the database:

```zsh
pnpm prisma db push
```

then run the following command to start the server:

```zsh
pnpm dev
```

and check types with:

```zsh
pnpm typecheck
```
