const fs = require('fs');
const path = require('path');

const svgFolderPath = 'src/assets/images/svg/';
const outputFile = 'src/components/Svg/types.ts';

function generateSvgData() {
    let header = `\
/*
npm run svg
yarn svg
bun svg
*/

import { ComponentPropsWithoutRef } from 'react';

export type TSvgName = 
`;

    // Set to track existing keys
    const existingKeys = new Set();

    // Process files directly present in the 'svg/' folder
    const svgFiles = fs.readdirSync(svgFolderPath).filter((file) => file.endsWith('.svg'));
    svgFiles.forEach((svgFile) => {
        const svgName = path.parse(svgFile).name;

        // Check for duplicate keys
        if (existingKeys.has(svgName)) {
            console.error(`Duplicate key found: ${svgName}`);
            process.exit(1);
        }

        existingKeys.add(svgName);
    });

    const svgTypeDefinitions = [...existingKeys].map((key) => `    | '${key}'`).join('\n');

    let footer = `${svgTypeDefinitions};

export interface ISvgProps extends React.SVGProps<SVGSVGElement> {
    iconName: TSvgName;
    svgProps?: ComponentPropsWithoutRef<'svg'>;
}
`;

    fs.writeFileSync(outputFile, header + footer);

    console.log(`Generated Svg Data in ${outputFile}`);
}

generateSvgData();

/* 폴더 재귀 탐색 
const fs = require('fs');
const path = require('path');

const svgFolderPath = 'src/assets/images/svg/';
const outputFile = 'src/components/Svg/types.ts';

function generateSvgData() {
    let header = `\

import { ComponentPropsWithoutRef } from 'react';

export type TSvgName = 
`;

    // Set to track existing keys
    const existingKeys = new Set();

    // Function to process files in a folder and its subfolders
    const processFolder = (folder) => {
        const folderPath = path.join(svgFolderPath, folder);
        const svgFiles = fs.readdirSync(folderPath).filter((file) => file.endsWith('.svg'));

        svgFiles.forEach((svgFile) => {
            const svgName = path.parse(svgFile).name;

            // Check for duplicate keys
            if (existingKeys.has(svgName)) {
                console.error(`Duplicate key found: ${svgName}`);
                process.exit(1);
            }

            existingKeys.add(svgName);
        });

        // Process subfolders recursively
        const subfolders = fs.readdirSync(folderPath);
        subfolders.forEach((subfolder) => {
            const subfolderPath = path.join(folderPath, subfolder);
            if (fs.statSync(subfolderPath).isDirectory()) {
                processFolder(`${folder}/${subfolder}`);
            }
        });
    };

    // Process files directly present in the 'svg/' folder
    const svgFiles = fs.readdirSync(svgFolderPath).filter((file) => file.endsWith('.svg'));
    svgFiles.forEach((svgFile) => {
        const svgName = path.parse(svgFile).name;

        // Check for duplicate keys
        if (existingKeys.has(svgName)) {
            console.error(`Duplicate key found: ${svgName}`);
        }

        existingKeys.add(svgName);
    });

    // Process subfolders and their files
    const folders = fs.readdirSync(svgFolderPath);
    folders.forEach((folder) => {
        const folderPath = path.join(svgFolderPath, folder);
        if (fs.statSync(folderPath).isDirectory()) {
            processFolder(folder);
        }
    });

    let footer = `${[...existingKeys].map(key => `'${key}'`).join(' | ')};

export interface ISvgProps extends React.SVGProps<SVGSVGElement> {
    iconName: TSvgName;
    svgProps?: ComponentPropsWithoutRef<'svg'>;
}
`;

    fs.writeFileSync(outputFile, header + footer);

    console.log(`Generated Svg Data in ${outputFile}`);
}

generateSvgData();
*/
