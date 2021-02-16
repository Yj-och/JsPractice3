'use strict';

function Fixed(){
    console.log('========================')
    console.log('現在持っているのタスク一覧')
    console.log('========================')
}
const todos = ['掃除', '買い物', '散歩'];
const commands = ['掃除', '買い物', '散歩', 'ああ'];

Fixed()
todos.forEach((todo,index) =>{
    console.log(`${index} : ${todo}`)
});

if(prompt('「確認、追加、削除、終了」のいずれかを入力してください')==='ああ'){
    Fixed()
    commands.forEach((command,index) =>{
        console.log(`${index} : ${command}`)
    });
　alert('新しいタスクが追加されました')
}