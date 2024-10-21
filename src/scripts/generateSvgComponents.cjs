const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const svgFolderPath = "src/assets/images/svg/";
const outputFile = "src/components/Svg/index.tsx";

function generateSvgComponents() {
  const header = `\
/*
npm run svg
yarn svg
bun svg
*/

import { ISvgProps } from "./types";
`;

  let importStatements = "";
  const svgData = [];

  // Set to track existing keys
  const existingKeys = new Set();

  // Function to process files in a folder and its subfolders
  const processFolder = (folder) => {
    const folderPath = path.join(svgFolderPath, folder);
    const svgFiles = fs.readdirSync(folderPath).filter((file) => file.endsWith(".svg"));

    svgFiles.forEach((svgFile) => {
      const svgName = path.parse(svgFile).name;

      // Check for duplicate keys
      if (existingKeys.has(svgName)) {
        console.error(`Duplicate key found: ${svgName}`);
        process.exit(1);
      }

      existingKeys.add(svgName);

      // Store data in an array for later sorting
      const folderName = folder !== "" ? folder : svgName.charAt(0);
      svgData.push({
        name: svgName,
        importStatement: `import ${svgName} from '@images/svg/${folder}/${svgFile}?react';`,
        sortKey: folderName,
      });
    });
  };

  // Process files directly present in the 'svg/' folder
  const svgFiles = fs.readdirSync(svgFolderPath).filter((file) => file.endsWith(".svg"));
  svgFiles.forEach((svgFile) => {
    const svgName = path.parse(svgFile).name;

    // Check for duplicate keys
    if (existingKeys.has(svgName)) {
      console.error(`Duplicate key found: ${svgName}`);
    }

    existingKeys.add(svgName);

    // Store data in an array for later sorting
    svgData.push({
      name: svgName,
      importStatement: `import ${svgName} from '@images/svg/${svgFile}?react';`,
      sortKey: svgName.charAt(0),
    });
  });

  // Process subfolders and their files
  const folders = fs.readdirSync(svgFolderPath);
  folders.forEach((folder) => {
    const folderPath = path.join(svgFolderPath, folder);
    if (fs.statSync(folderPath).isDirectory()) {
      processFolder(folder);
    }
  });

  // Sort the array by sortKey (uppercase first) and then by name
  svgData.sort((a, b) => {
    const keyA = a.sortKey;
    const keyB = b.sortKey;

    if (keyA[0] >= "A" && keyA[0] <= "Z" && !(keyB[0] >= "A" && keyB[0] <= "Z")) {
      // keyA가 대문자로 시작하고 keyB가 소문자로 시작하는 경우 keyA를 먼저 배치
      return -1;
    } else if (!(keyA[0] >= "A" && keyA[0] <= "Z") && keyB[0] >= "A" && keyB[0] <= "Z") {
      // keyB가 대문자로 시작하고 keyA가 소문자로 시작하는 경우 keyB를 먼저 배치
      return 1;
    }

    // 그 외의 경우에는 문자열 비교를 사용하여 정렬
    return keyA.localeCompare(keyB);
  });

  // Create import statements
  svgData.forEach(({ importStatement }) => {
    importStatements += `${importStatement}\n`;
  });

  // Create SvgComponentContent
  let SvgComponentContent = "const SvgComponents = {\n";
  svgData.forEach(({ name }) => {
    SvgComponentContent += `    ${name},\n`;
  });
  SvgComponentContent += "};\n";

  const footer = `\nexport default function Svg({ iconName, ...props }: ISvgProps) {
  const Component = SvgComponents[iconName];
  return <Component {...props} />;
}\n`;

  fs.writeFileSync(outputFile, header + importStatements + "\n" + SvgComponentContent + footer);

  // Run eslint fix script
  const eslintFixCommand = `eslint --fix ${outputFile}`;

  exec(eslintFixCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running eslint fix script: ${error}`);
      return;
    }
    console.log(`Generated Svg Component in ${outputFile}`);
  });
}

generateSvgComponents();
