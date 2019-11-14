# Read arguments passed to the script.
if [ -z "$1" ]; then
 ENVIRONMENT='development'
else
 ENVIRONMENT="$1"
fi

echo ""
echo "Seed for environment: $ENVIRONMENT"
echo ""

echo " -> Step 1/3: Compiling seed scripts."
echo ""
mkdir -p ./src/infrastructure/built-seeders/seeders
for filename in ./src/infrastructure/database/seeders/*.ts; do
 yarn tsc -t es2017 -module CommonJS -outDir ./src/infrastructure/built-seeders/seeders $filename
done
echo ""
echo " -> Compilation completed."
echo ""

echo ""
echo " -> Step 2/3: Starting seed."
echo ""
yarn sequelize db:seed:all --env $ENVIRONMENT
echo ""
echo " -> Seed completed."
echo ""

echo ""
echo " -> Step 3/3: Deleting generated files."
echo ""
rm -Rf ./src/infrastructure/built-seeders/
echo ""
echo " -> Deletion completed."