
// 清洗函数
function cleanQuestion(question) {
    // 去除括号及其内容
    question = question.replace(/（[^（]*）/g, '');
    // 去除标点符号
    question = question.replace(/[\.\,\;\、:\!\？\。\，\；\：\！]/g, '');
    // 去除空格
    question = question.replace(/\s+/g, '');
    question = question.replace(/\(.*?\)/g, ""); // 使用正则表达式匹配括号及其内容，并用空字符串替换
    question = question.replace(/^\d+/, '');
    return question;
}

fetch('https://raw.githubusercontent.com/cutefox123/FrontEndStudy/master/questions.json')
    .then(response => response.json())
    .then(data => {



        // 获取所有题目
        const questions = document.querySelectorAll('.question-contain');

        // 遍历每个题目
        questions.forEach((question) => {
            // 获取题目的文本内容
            const questionText = cleanQuestion(question.querySelector('.exam-qustion-content').textContent);
         //   console.log(data[questionText]);
         if( data[questionText] !=null){

      
         data[questionText] = data[questionText].replace(/\s+/g, '');
         if (data[questionText] == '对') {
            // 找到对应选项并选中
            const optionA = question.querySelector('.true-false-label:first-of-type .uni-radio-input');
            optionA.click();
        }

        if (data[questionText] == '错') {
            // 找到对应选项并选中
            const optionA = question.querySelector('.true-false-label:last-of-type .uni-radio-input');
            optionA.click();
        }

            if (data[questionText] == 'A') {
                // 找到对应选项并选中
                const optionA = question.querySelector('.choice-label:first-of-type .uni-radio-input');
                optionA.click();
            }


            if (data[questionText] == 'B') {
                // 找到对应选项并选中
                const optionB = question.querySelector('.choice-label:nth-of-type(2) .uni-radio-input');
                optionB.click();
            }
            if (data[questionText] == 'C') {
                // 找到对应选项并选中
                const optionC = question.querySelector('.choice-label:nth-of-type(3) .uni-radio-input');
                optionC.click();
            }
            if (data[questionText] == 'D') {
                // 找到对应选项并选中
                const optionD = question.querySelector('.choice-label:last-of-type .uni-radio-input');
                optionD.click();
            }
           
            if (data[questionText].length >= 2) {
                let options = data[questionText].split('');
                for (let i = 0; i < options.length; i++) {
                    console.log(options);
                    if (options[i] == 'A')
                        question.querySelectorAll('.choice-checkbox')[0].querySelector('.uni-checkbox-input').click();
                    if (options[i] == 'B')
                        question.querySelectorAll('.choice-checkbox')[1].querySelector('.uni-checkbox-input').click();
                    if (options[i] == 'C')
                        question.querySelectorAll('.choice-checkbox')[2].querySelector('.uni-checkbox-input').click();
                    if (options[i] == 'D')
                        question.querySelectorAll('.choice-checkbox')[3].querySelector('.uni-checkbox-input').click();
                }

            }
        }

        });

    });

