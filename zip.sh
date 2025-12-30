rm -f osekaimedallinker-*.zip
echo Removed old zip
zip -r "osekaimedallinker-$(jq -r '.version' manifest.json).zip" icons manifest.json index.js
echo Zipped files successfully
