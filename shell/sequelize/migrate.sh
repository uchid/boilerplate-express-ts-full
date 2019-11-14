# Read arguments passed to the script.
if [ -z "$1" ]; then
 ENVIRONMENT='development'
else
 ENVIRONMENT="$1"
fi

echo ""
echo "Migrating for environment: $ENVIRONMENT"
echo ""

echo " -> Step 1/3: Compiling migration scripts."
echo ""
mkdir ./src/infrastructure/built-migrations/
for filename in ./src/infrastructure/database/migrations/*.ts; do
 yarn tsc -t es2017 -module CommonJS -outDir ./src/infrastructure/built-migrations/ $filename
done
echo ""
echo " -> Compilation completed."
echo ""

echo ""
echo " -> Step 2/3: Starting migration."
echo ""
yarn sequelize db:migrate --env $ENVIRONMENT
echo ""
echo " -> Migration completed."
echo ""

echo ""
echo " -> Step 3/3: Deleting generated files."
echo ""
rm -Rf ./src/infrastructure/built-migrations/
echo ""
echo " -> Deletion completed."