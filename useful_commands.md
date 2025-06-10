# JWT_SECRET Generation
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Prisma Commands
npx prisma generate
(in docker container) npx prisma migrate dev --name init