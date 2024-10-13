const watch = require('node-watch');
const { exec } = require('child_process');

const folderToWatch = 'src/assets/images/svg';

// 실행할 스크립트 또는 명령어
const scriptToRun = 'npm run svg';

// 첫 감시 시작 전 서버 OFF 상태일 때 변경점 반영을 위한 스크립트 실행
exec(scriptToRun, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing script: ${error}`);
        return;
    }
    console.log(`Initial script output: ${stdout}`);
});

// 폴더 감시 시작
console.log(`Watching changes in ${folderToWatch}`);
watch(folderToWatch, { recursive: true }, (event, filename) => {
    if (event === 'update' || event === 'remove') {
        // 변경 감지 시 실행할 스크립트 실행
        exec(scriptToRun, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing script: ${error}`);
                return;
            }
            console.log(`File ${filename} has been changed`);
            console.log(`Script output: ${stdout}`);
        });
    }
});

// 프로세스 종료 시 감시 중지
process.on('SIGINT', () => {
    console.log('Stopping watcher...');
    process.exit(0);
});
