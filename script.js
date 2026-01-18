/**
 * Dictation Master - Application Logic
 */

const MASTER_DATA = {
    junior: [
        // --- 1年生レベル (挨拶・基本・現在形・助動詞can) ---
        { en: "I am a student.", ja: "私は学生です。" }, { en: "I like English.", ja: "私は英語が好きです。" }, { en: "This is my bag.", ja: "これは私のかばんです。" }, { en: "That is my house.", ja: "あれは私の家です。" }, { en: "I live in Japan.", ja: "私は日本に住んでいます。" }, { en: "She is my sister.", ja: "彼女は私の姉です。" }, { en: "He plays soccer.", ja: "彼はサッカーをします。" }, { en: "We go to school every day.", ja: "私たちは毎日学校に行きます。" }, { en: "They like dogs.", ja: "彼らは犬が好きです。" }, { en: "I have a pen.", ja: "私はペンを持っています。" }, { en: "I have two brothers.", ja: "私には兄弟が2人います。" }, { en: "Do you like music?", ja: "音楽は好きですか。" }, { en: "Yes, I do.", ja: "はい、好きです。" }, { en: "No, I don't.", ja: "いいえ、好きではありません。" }, { en: "What is this?", ja: "これは何ですか。" }, { en: "It is a book.", ja: "それは本です。" }, { en: "Where do you live?", ja: "どこに住んでいますか。" }, { en: "I get up at six.", ja: "私は6時に起きます。" }, { en: "I eat breakfast at home.", ja: "私は家で朝食を食べます。" }, { en: "She studies English.", ja: "彼女は英語を勉強します。" }, { en: "He likes baseball.", ja: "彼は野球が好きです。" }, { en: "We have lunch at school.", ja: "私たちは学校で昼食をとります。" }, { en: "I can swim.", ja: "私は泳げます。" }, { en: "Can you help me?", ja: "手伝ってくれますか。" }, { en: "I cannot understand this.", ja: "私はこれが理解できません。" }, { en: "Please open the door.", ja: "ドアを開けてください。" }, { en: "Sit down, please.", ja: "座ってください。" }, { en: "Thank you very much.", ja: "どうもありがとうございます。" }, { en: "You are welcome.", ja: "どういたしまして。" }, { en: "This is my favorite song.", ja: "これは私のお気に入りの歌です。" }, { en: "I like to read books.", ja: "私は本を読むのが好きです。" }, { en: "She likes to cook.", ja: "彼女は料理をするのが好きです。" }, { en: "It is sunny today.", ja: "今日は晴れです。" }, { en: "It is cold in winter.", ja: "冬は寒いです。" }, { en: "My father works in Tokyo.", ja: "私の父は東京で働いています。" }, { en: "My mother is a teacher.", ja: "私の母は先生です。" }, { en: "I go home after school.", ja: "私は放課後家に帰ります。" }, { en: "I watch TV at night.", ja: "私は夜テレビを見ます。" }, { en: "I like apples.", ja: "私はりんごが好きです。" }, { en: "She likes bananas.", ja: "彼女はバナナが好きです。" }, { en: "This is an interesting book.", ja: "これは面白い本です。" }, { en: "That is a big dog.", ja: "あれは大きな犬です。" }, { en: "My school is near my house.", ja: "私の学校は家の近くです。" }, { en: "I walk to school.", ja: "私は歩いて学校に行きます。" }, { en: "He runs fast.", ja: "彼は速く走ります。" }, { en: "She sings well.", ja: "彼女は上手に歌います。" }, { en: "We play tennis on Sunday.", ja: "私たちは日曜日にテニスをします。" }, { en: "I study math every day.", ja: "私は毎日数学を勉強します。" }, { en: "Do you have a dog?", ja: "犬を飼っていますか。" }, { en: "Yes, I have a dog.", ja: "はい、犬を飼っています。" }, { en: "No, I don't have one.", ja: "いいえ、飼っていません。" }, { en: "How old are you?", ja: "何歳ですか。" }, { en: "I am thirteen years old.", ja: "私は13歳です。" }, { en: "Nice to meet you.", ja: "はじめまして。" }, { en: "Nice to meet you, too.", ja: "こちらこそ。" }, { en: "See you tomorrow.", ja: "また明日。" }, { en: "Good morning.", ja: "おはようございます。" }, { en: "Good afternoon.", ja: "こんにちは。" }, { en: "Good evening.", ja: "こんばんは。" }, { en: "Good night.", ja: "おやすみなさい。" }, { en: "I like my school.", ja: "私は自分の学校が好きです。" }, { en: "English is fun.", ja: "英語は楽しいです。" }, { en: "I study hard every day.", ja: "私は毎日一生懸命勉強します。" }, { en: "Let's study English together.", ja: "一緒に英語を勉強しましょう。" }, { en: "I want to learn English.", ja: "私は英語を学びたいです。" },

        // --- 2年生レベル (過去形・未来形・不定詞・動名詞・比較) ---
        { en: "I visited Nara yesterday.", ja: "私は昨日奈良を訪れました。" }, { en: "We enjoyed the party.", ja: "私たちはパーティーを楽しみました。" }, { en: "Did you see it?", ja: "それを見ましたか？" }, { en: "I studied English last night.", ja: "私は昨夜英語を勉強しました。" }, { en: "She played the piano.", ja: "彼女はピアノを弾きました。" }, { en: "He went to school early.", ja: "彼は早く学校へ行きました。" }, { en: "We watched a movie.", ja: "私たちは映画を見ました。" }, { en: "I was tired yesterday.", ja: "私は昨日疲れていました。" }, { en: "She was happy then.", ja: "彼女はそのとき幸せでした。" }, { en: "Were you busy last week?", ja: "先週忙しかったですか。" }, { en: "Yes, I was.", ja: "はい、忙しかったです。" }, { en: "No, I wasn't.", ja: "いいえ、忙しくありませんでした。" }, { en: "I did my homework.", ja: "私は宿題をしました。" }, { en: "He didn't come today.", ja: "彼は今日は来ませんでした。" }, { en: "Did she call you?", ja: "彼女はあなたに電話しましたか。" }, { en: "I will study tonight.", ja: "私は今夜勉強します。" }, { en: "She will be a teacher.", ja: "彼女は先生になるでしょう。" }, { en: "We will go to Tokyo tomorrow.", ja: "私たちは明日東京へ行きます。" }, { en: "It will rain tomorrow.", ja: "明日は雨が降るでしょう。" }, { en: "I am going to visit my aunt.", ja: "私はおばを訪ねる予定です。" }, { en: "She is going to study abroad.", ja: "彼女は留学する予定です。" }, { en: "What are you going to do today?", ja: "今日は何をする予定ですか。" }, { en: "This book is bigger than that one.", ja: "この本はあの本より大きいです。" }, { en: "My house is newer than his.", ja: "私の家は彼の家より新しいです。" }, { en: "She runs faster than me.", ja: "彼女は私より速く走ります。" }, { en: "This question is easier.", ja: "この問題はより簡単です。" }, { en: "Which do you like better?", ja: "どちらのほうが好きですか。" }, { en: "English is more interesting than math.", ja: "英語は数学より面白いです。" }, { en: "He is the tallest boy.", ja: "彼は一番背の高い少年です。" }, { en: "This is the best answer.", ja: "これが最良の答えです。" }, { en: "She is the most famous singer.", ja: "彼女は最も有名な歌手です。" }, { en: "I like apples better than oranges.", ja: "私はオレンジよりりんごのほうが好きです。" }, { en: "I like apples the best.", ja: "私はりんごが一番好きです。" }, { en: "It was raining then.", ja: "そのとき雨が降っていました。" }, { en: "She was reading a book.", ja: "彼女は本を読んでいました。" }, { en: "They were playing soccer.", ja: "彼らはサッカーをしていました。" }, { en: "I was studying English at that time.", ja: "そのとき私は英語を勉強していました。" }, { en: "When I got home, it was dark.", ja: "家に着いたとき、暗かったです。" }, { en: "After school, I went home.", ja: "放課後、私は家に帰りました。" }, { en: "Before dinner, I did my homework.", ja: "夕食前に宿題をしました。" }, { en: "Because it was cold, I stayed home.", ja: "寒かったので、家にいました。" }, { en: "I was happy because I won.", ja: "勝ったのでうれしかったです。" }, { en: "I bought a book and read it.", ja: "本を買って読みました。" }, { en: "She likes music and art.", ja: "彼女は音楽と美術が好きです。" }, { en: "He studied hard, but failed.", ja: "彼は一生懸命勉強しましたが、失敗しました。" }, { en: "I was tired, so I went to bed early.", ja: "疲れていたので、早く寝ました。" }, { en: "I met him at the station.", ja: "私は駅で彼に会いました。" }, { en: "She talked with her friend.", ja: "彼女は友達と話しました。" }, { en: "We learned many things.", ja: "私たちは多くのことを学びました。" }, { en: "I took many pictures.", ja: "私はたくさん写真を撮りました。" }, { en: "He gave me a present.", ja: "彼は私にプレゼントをくれました。" }, { en: "She made a cake.", ja: "彼女はケーキを作りました。" }, { en: "I heard the news.", ja: "私はその知らせを聞きました。" }, { en: "They found the answer.", ja: "彼らは答えを見つけました。" }, { en: "I lost my key.", ja: "私は鍵をなくしました。" }, { en: "He helped his mother.", ja: "彼は母親を手伝いました。" }, { en: "She taught me English.", ja: "彼女は私に英語を教えました。" }, { en: "We had a good time.", ja: "私たちは楽しい時間を過ごしました。" }, { en: "I felt very happy.", ja: "私はとても幸せに感じました。" }, { en: "It became cold.", ja: "寒くなりました。" }, { en: "Spring came early.", ja: "春が早く来ました。" }, { en: "Time passed quickly.", ja: "時間は早く過ぎました。" }, { en: "I think he is kind.", ja: "私は彼は親切だと思います。" }, { en: "I hope to see you again.", ja: "また会えることを願っています。" }, { en: "Please tell me the truth.", ja: "本当のことを教えてください。" }, { en: "Let's meet at five.", ja: "5時に会いましょう。" }, { en: "Don't be late.", ja: "遅れないでください。" }, { en: "I enjoyed my trip.", ja: "私は旅行を楽しみました。" }, { en: "I learned a lot.", ja: "私は多くのことを学びました。" },

        // --- 3年生レベル (現在完了・受動態・分詞・関係代名詞) ---
        { en: "This book is written in English.", ja: "この本は英語で書かれています。" }, { en: "The window was broken by him.", ja: "窓は彼によって壊されました。" }, { en: "This song is loved by many people.", ja: "この歌は多くの人に愛されています。" }, { en: "The bridge was built long ago.", ja: "その橋は昔建てられました。" }, { en: "English is spoken in many countries.", ja: "英語は多くの国で話されています。" }, { en: "I was surprised by the news.", ja: "私はその知らせに驚きました。" }, { en: "The game was canceled because of rain.", ja: "雨のため試合は中止されました。" }, { en: "My bike was stolen yesterday.", ja: "私の自転車は昨日盗まれました。" }, { en: "This picture was taken by my father.", ja: "この写真は父によって撮られました。" }, { en: "Dinner is prepared every evening.", ja: "夕食は毎晩用意されます。" },
        { en: "I have finished my homework.", ja: "私は宿題を終えました。" }, { en: "She has already left.", ja: "彼女はすでに出発しました。" }, { en: "Have you ever been to Kyoto?", ja: "京都に行ったことがありますか。" }, { en: "I have never seen such a movie.", ja: "私はそのような映画を見たことがありません。" }, { en: "He has lived here for five years.", ja: "彼はここに5年間住んでいます。" }, { en: "I have studied English since I was a child.", ja: "私は子どものころから英語を勉強しています。" }, { en: "We have just arrived at the station.", ja: "私たちはちょうど駅に着いたところです。" }, { en: "She has lost her key.", ja: "彼女は鍵をなくしてしまいました。" }, { en: "How long have you known him?", ja: "彼をどのくらい知っていますか。" }, { en: "I have been busy recently.", ja: "私は最近忙しいです。" },
        { en: "I want to be a teacher.", ja: "私は先生になりたいです。" }, { en: "She wants to study abroad.", ja: "彼女は留学したがっています。" }, { en: "I hope to see you again.", ja: "また会えることを願っています。" }, { en: "He decided to join the club.", ja: "彼はその部活に入ることを決めました。" }, { en: "I tried to open the door.", ja: "私はドアを開けようとしました。" }, { en: "She learned how to cook.", ja: "彼女は料理の仕方を学びました。" }, { en: "It is important to study every day.", ja: "毎日勉強することは大切です。" }, { en: "It is difficult to solve the problem.", ja: "その問題を解くのは難しいです。" }, { en: "I am glad to hear that.", ja: "それを聞いてうれしいです。" }, { en: "I was happy to help you.", ja: "あなたを手伝えてうれしかったです。" },
        { en: "Do you know where he lives?", ja: "彼がどこに住んでいるか知っていますか。" }, { en: "I don't know what to do.", ja: "何をすべきかわかりません。" }, { en: "Please tell me when the train leaves.", ja: "電車がいつ出るか教えてください。" }, { en: "I remember how we met.", ja: "私たちがどうやって出会ったか覚えています。" }, { en: "She asked me why I was late.", ja: "彼女はなぜ遅れたのか私に尋ねました。" },
        { en: "I think that he is honest.", ja: "私は彼は正直だと思います。" }, { en: "I believe that she will succeed.", ja: "私は彼女が成功すると信じています。" }, { en: "It seems that it will rain.", ja: "雨が降りそうです。" }, { en: "I am sure that he will come.", ja: "彼は来ると確信しています。" }, { en: "I hope that everything goes well.", ja: "すべてうまくいくことを願っています。" },
        { en: "Because it was raining, we stayed home.", ja: "雨が降っていたので、家にいました。" }, { en: "Although he is young, he is strong.", ja: "彼は若いですが、強いです。" }, { en: "If it rains, I will stay home.", ja: "もし雨が降れば、家にいます。" }, { en: "When I grow up, I want to be a doctor.", ja: "大人になったら医者になりたいです。" }, { en: "As soon as I got home, I slept.", ja: "家に着くとすぐに寝ました。" },
        { en: "We must protect the environment.", ja: "私たちは環境を守らなければなりません。" }, { en: "You should listen to your parents.", ja: "あなたは両親の言うことを聞くべきです。" }, { en: "You had better hurry.", ja: "急いだほうがいいです。" }, { en: "We need to save energy.", ja: "私たちはエネルギーを節約する必要があります。" }, { en: "I want you to help me.", ja: "私はあなたに手伝ってほしいです。" },
        { en: "He made me laugh.", ja: "彼は私を笑わせました。" }, { en: "She let me use her phone.", ja: "彼女は私に電話を使わせてくれました。" }, { en: "I saw him enter the room.", ja: "私は彼が部屋に入るのを見ました。" }, { en: "I heard her sing a song.", ja: "私は彼女が歌うのを聞きました。" },
        { en: "My dream is to travel around the world.", ja: "私の夢は世界中を旅することです。" }, { en: "Studying English will help your future.", ja: "英語を勉強することは将来の役に立ちます。" }, { en: "I will do my best to achieve my goal.", ja: "目標を達成するために最善を尽くします。" }, { en: "Never give up your dream.", ja: "夢を決してあきらめないでください。" }, { en: "I am proud of myself.", ja: "私は自分を誇りに思います。" }
],
    senior: [
        // --- 高校1年生レベル（不定詞・動名詞・関係代名詞） ---
        { en: "I want to learn English well.", ja: "私は英語を上手に学びたいです。" }, { en: "She hopes to become a doctor.", ja: "彼女は医者になることを望んでいます。" }, { en: "He decided to study abroad.", ja: "彼は留学することを決めました。" }, { en: "I tried to explain the problem.", ja: "私はその問題を説明しようとしました。" }, { en: "They plan to visit Kyoto.", ja: "彼らは京都を訪れる予定です。" }, { en: "It is important to keep promises.", ja: "約束を守ることは重要です。" }, { en: "It takes time to learn a language.", ja: "言語を学ぶには時間がかかります。" }, { en: "She was happy to hear the news.", ja: "彼女はその知らせを聞いてうれしかったです。" }, { en: "I was surprised to see him there.", ja: "私は彼をそこで見て驚きました。" }, { en: "He is old enough to drive.", ja: "彼は運転できるほど十分に年を取っています。" },
        { en: "Studying English is fun.", ja: "英語を勉強することは楽しいです。" }, { en: "Reading books helps you learn.", ja: "本を読むことは学習の助けになります。" }, { en: "I enjoy listening to music.", ja: "私は音楽を聴くのを楽しみます。" }, { en: "She finished doing her homework.", ja: "彼女は宿題をするのを終えました。" }, { en: "He stopped smoking.", ja: "彼は喫煙をやめました。" }, { en: "I am interested in learning history.", ja: "私は歴史を学ぶことに興味があります。" }, { en: "Thank you for helping me.", ja: "手伝ってくれてありがとう。" }, { en: "She is good at speaking English.", ja: "彼女は英語を話すのが得意です。" }, { en: "I am tired of waiting.", ja: "私は待つことに疲れました。" }, { en: "He kept trying.", ja: "彼は挑戦し続けました。" },
        { en: "This is the book that I bought yesterday.", ja: "これは私が昨日買った本です。" }, { en: "She has a friend who lives in Canada.", ja: "彼女にはカナダに住んでいる友達がいます。" }, { en: "The man who is standing there is my uncle.", ja: "そこに立っている男性は私の叔父です。" }, { en: "I know the reason why he was late.", ja: "私は彼が遅れた理由を知っています。" }, { en: "This is the place where we met.", ja: "ここが私たちが出会った場所です。" }, { en: "The day when we met was rainy.", ja: "私たちが会った日は雨でした。" }, { en: "The girl whose bag was stolen cried.", ja: "かばんを盗まれた少女は泣きました。" }, { en: "I like people who are honest.", ja: "私は正直な人が好きです。" }, { en: "He found a job that he likes.", ja: "彼は気に入った仕事を見つけました。" }, { en: "This is the best movie that I have ever seen.", ja: "これは私が今まで見た中で最高の映画です。" },
        { en: "English is a language which is spoken worldwide.", ja: "英語は世界中で話されている言語です。" }, { en: "The house which was built last year is mine.", ja: "昨年建てられた家は私のものです。" }, { en: "I met a man whose daughter is a singer.", ja: "娘が歌手の男性に会いました。" }, { en: "There are many students who want to study abroad.", ja: "留学したい学生はたくさんいます。" }, { en: "This is the reason why I chose this school.", ja: "これが私がこの学校を選んだ理由です。" },
        { en: "I think English is easier than math.", ja: "英語は数学より簡単だと思います。" }, { en: "The more you read, the more you learn.", ja: "読めば読むほど、学べます。" }, { en: "She speaks English better than I do.", ja: "彼女は私より上手に英語を話します。" }, { en: "He works harder than anyone else.", ja: "彼は誰よりも一生懸命働きます。" }, { en: "This problem is too difficult to solve.", ja: "この問題は難しすぎて解けません。" },
        { en: "I am looking forward to seeing you.", ja: "あなたに会うのを楽しみにしています。" }, { en: "She is used to getting up early.", ja: "彼女は早起きに慣れています。" }, { en: "I am busy preparing for the test.", ja: "私はテストの準備で忙しいです。" }, { en: "He succeeded in passing the exam.", ja: "彼は試験に合格することに成功しました。" }, { en: "Please stop talking.", ja: "話すのをやめてください。" },
        { en: "I want you to understand me.", ja: "私はあなたに私を理解してほしいです。" }, { en: "She asked me to help her.", ja: "彼女は私に手伝うよう頼みました。" }, { en: "He told us to be quiet.", ja: "彼は私たちに静かにするよう言いました。" }, { en: "The teacher allowed us to use dictionaries.", ja: "先生は私たちに辞書の使用を許可しました。" },
        { en: "My dream is to become an engineer.", ja: "私の夢はエンジニアになることです。" }, { en: "Learning English opens new doors.", ja: "英語を学ぶことは新しい扉を開きます。" }, { en: "I will keep studying English.", ja: "私は英語の勉強を続けます。" }, { en: "Never stop trying.", ja: "決して挑戦をやめないでください。" }, { en: "努力は必ず報われます。", ja: "努力は必ず報われます。" },
        // --- 高校2年生レベル（分詞構文・仮定法・関係副詞・準動詞応用） ---
        { en: "Walking along the river, I met an old friend.", ja: "川沿いを歩いていると、旧友に会いました。" }, { en: "Being tired, I went to bed early.", ja: "疲れていたので、早く寝ました。" }, { en: "Hearing the news, she began to cry.", ja: "その知らせを聞いて、彼女は泣き始めました。" }, { en: "Seen from a distance, the mountain looks beautiful.", ja: "遠くから見ると、その山は美しく見えます。" }, { en: "Given enough time, we can solve the problem.", ja: "十分な時間が与えられれば、その問題を解けます。" }, { en: "Turning to the right, you will see the station.", ja: "右に曲がると駅が見えます。" }, { en: "Compared with last year, sales have increased.", ja: "昨年と比べて、売上は増加しました。" }, { en: "Not knowing what to say, I kept silent.", ja: "何を言えばよいかわからず、黙っていました。" }, { en: "Feeling nervous, he took a deep breath.", ja: "緊張しながら、彼は深呼吸をしました。" }, { en: "Working hard, she achieved her goal.", ja: "一生懸命働いて、彼女は目標を達成しました。" },
        { en: "If I were you, I would accept the offer.", ja: "もし私があなたなら、その申し出を受けます。" }, { en: "If he had more time, he could help us.", ja: "もし彼にもっと時間があれば、私たちを手伝えたでしょう。" }, { en: "If it were not for your help, I would fail.", ja: "あなたの助けがなければ、失敗していたでしょう。" }, { en: "I wish I were taller.", ja: "もっと背が高ければいいのにと思います。" }, { en: "She wishes she had studied harder.", ja: "彼女はもっと一生懸命勉強していればよかったと思っています。" }, { en: "I wish I could speak English fluently.", ja: "英語を流暢に話せたらいいのにと思います。" }, { en: "If only I knew the answer.", ja: "答えを知っていればよかったのに。" }, { en: "Had I known the truth, I would not have done it.", ja: "真実を知っていたら、それをしなかったでしょう。" }, { en: "Were he here, he would help us.", ja: "もし彼がここにいれば、私たちを手伝うでしょう。" }, { en: "But for your advice, I would be lost.", ja: "あなたの助言がなければ、途方に暮れていたでしょう。" },
        { en: "This is the reason why I chose this job.", ja: "これが私がこの仕事を選んだ理由です。" }, { en: "The day when we first met is unforgettable.", ja: "私たちが初めて会った日は忘れられません。" }, { en: "The place where the accident happened is dangerous.", ja: "事故が起きた場所は危険です。" }, { en: "The time when we can relax is limited.", ja: "私たちがくつろげる時間は限られています。" }, { en: "The reason why he left remains unknown.", ja: "彼が去った理由はまだ分かっていません。" }, { en: "The house where he grew up was sold.", ja: "彼が育った家は売られました。" }, { en: "The situation where mistakes are allowed is rare.", ja: "失敗が許される状況はまれです。" },
        { en: "I am not sure whether he will come.", ja: "彼が来るかどうか分かりません。" }, { en: "It depends on how you think.", ja: "それはあなたの考え方次第です。" }, { en: "The question is whether we should act now.", ja: "問題は今行動すべきかどうかです。" }, { en: "What matters most is how we use our time.", ja: "最も重要なのは、時間をどう使うかです。" }, { en: "How to solve the problem is still unclear.", ja: "その問題をどう解くかはまだ不明です。" },
        { en: "He spoke as if he knew everything.", ja: "彼はすべてを知っているかのように話しました。" }, { en: "She looks as if she were tired.", ja: "彼女は疲れているかのように見えます。" }, { en: "It seems as though it will rain.", ja: "雨が降りそうです。" }, { en: "He acted as though nothing had happened.", ja: "彼は何も起こらなかったかのように振る舞いました。" },
        { en: "The more you practice, the better you become.", ja: "練習すればするほど上達します。" }, { en: "The harder you work, the more you gain.", ja: "一生懸命働けば働くほど、多くを得ます。" }, { en: "The sooner you start, the sooner you finish.", ja: "早く始めれば早く終わります。" },
        { en: "He is likely to succeed.", ja: "彼は成功しそうです。" }, { en: "She is sure to win the game.", ja: "彼女はその試合に勝つに違いありません。" }, { en: "This problem is too difficult for me to solve.", ja: "この問題は私には難しすぎて解けません。" }, { en: "The box is large enough to hold all the books.", ja: "その箱はすべての本を入れるのに十分大きいです。" },
        { en: "I cannot help admiring her courage.", ja: "私は彼女の勇気に感心せずにはいられません。" }, { en: "He failed to notice the mistake.", ja: "彼はその間違いに気づきませんでした。" }, { en: "She managed to finish the work on time.", ja: "彼女は何とか時間通りに仕事を終えました。" }, { en: "I happened to meet him on the street.", ja: "私は偶然通りで彼に会いました。" },
        { en: "To tell the truth, I was afraid.", ja: "正直に言うと、私は怖かったです。" }, { en: "Generally speaking, young people adapt quickly.", ja: "一般的に言って、若者は順応が早いです。" }, { en: "Judging from the result, the plan failed.", ja: "結果から判断すると、その計画は失敗しました。" }, { en: "Needless to say, health comes first.", ja: "言うまでもなく、健康が第一です。" },
        { en: "Education plays an important role in society.", ja: "教育は社会で重要な役割を果たします。" }, { en: "Technology has changed the way we live.", ja: "技術は私たちの生活の仕方を変えました。" }, { en: "We should consider the long-term effects.", ja: "長期的な影響を考えるべきです。" }, { en: "It is essential that we respect others.", ja: "他人を尊重することは不可欠です。" },
        { en: "Effort will always pay off.", ja: "努力は必ず報われます。" }, { en: "Believe in yourself.", ja: "自分を信じてください。" }, { en: "Challenges help us grow.", ja: "困難は私たちを成長させます。" }, { en: "Experience is the best teacher.", ja: "経験は最良の教師です。" },
        // --- 高校3年生レベル（論理構文・抽象表現・入試最頻出） ---
        { en: "What matters most is how we use our time.", ja: "最も重要なのは、時間をどう使うかです。" }, { en: "It is not what you know but how you use it that matters.", ja: "重要なのは何を知っているかではなく、それをどう使うかです。" }, { en: "There is no doubt that education shapes society.", ja: "教育が社会を形作ることは疑いありません。" }, { en: "The question is not whether we can do it, but whether we should.", ja: "問題はできるかどうかではなく、すべきかどうかです。" }, { en: "What we learn today will affect our future.", ja: "今日学ぶことは将来に影響します。" },   
        { en: "It is often said that experience is the best teacher.", ja: "経験が最良の教師だとよく言われます。" }, { en: "It is true that technology has improved our lives.", ja: "技術が私たちの生活を向上させたのは事実です。" }, { en: "It cannot be denied that climate change is a serious issue.", ja: "気候変動が深刻な問題であることは否定できません。" }, { en: "It remains unclear whether this plan will succeed.", ja: "この計画が成功するかどうかは依然として不明です。" }, { en: "It is essential that we take responsibility for our actions.", ja: "自分の行動に責任を持つことは不可欠です。" },
        { en: "The more information we have, the better decisions we can make.", ja: "多くの情報があればあるほど、より良い判断ができます。" }, { en: "The faster society changes, the harder it becomes to adapt.", ja: "社会が速く変化するほど、適応は難しくなります。" }, { en: "The less we rely on others, the more independent we become.", ja: "他人に頼らないほど、私たちは自立します。" },
        { en: "Some people argue that money brings happiness.", ja: "お金が幸福をもたらすと主張する人もいます。" }, { en: "Others claim that happiness comes from relationships.", ja: "一方で、幸福は人間関係から生まれると主張する人もいます。" }, { en: "Both views have their own strengths and weaknesses.", ja: "どちらの考えにも長所と短所があります。" }, { en: "It is important to consider different perspectives.", ja: "異なる視点を考慮することが重要です。" },
        { en: "Although freedom is valuable, it comes with responsibility.", ja: "自由は価値がありますが、責任も伴います。" }, { en: "While technology makes life convenient, it can cause problems.", ja: "技術は生活を便利にしますが、問題を引き起こすこともあります。" }, { en: "Even if we fail, we can learn from our mistakes.", ja: "たとえ失敗しても、そこから学ぶことができます。" }, { en: "Unless we take action now, the situation will get worse.", ja: "今行動を起こさなければ、状況は悪化するでしょう。" },
        { en: "Education enables people to think critically.", ja: "教育は人々に批判的に考える力を与えます。" }, { en: "Critical thinking is required in modern society.", ja: "現代社会では批判的思考が求められます。" }, { en: "One of the biggest challenges we face is inequality.", ja: "私たちが直面する最大の課題の一つは不平等です。" }, { en: "This issue should be addressed from multiple angles.", ja: "この問題は多角的に取り組むべきです。" },
        { en: "What is important is not the result but the process.", ja: "重要なのは結果ではなく過程です。" }, { en: "Success is often achieved through repeated failure.", ja: "成功はしばしば繰り返される失敗を通じて得られます。" }, { en: "Failure should be seen as an opportunity to grow.", ja: "失敗は成長の機会として捉えるべきです。" },
        { en: "It is said that young people are losing interest in reading.", ja: "若者が読書への関心を失っていると言われています。" }, { en: "This trend may have negative effects on society.", ja: "この傾向は社会に悪影響を及ぼす可能性があります。" }, { en: "However, digital media also offers new possibilities.", ja: "しかし、デジタルメディアは新たな可能性も提供します。" },
        { en: "We must decide how to balance efficiency and quality.", ja: "効率と質をどう両立させるかを決めなければなりません。" }, { en: "The key to solving this problem lies in cooperation.", ja: "この問題を解決する鍵は協力にあります。" }, { en: "Mutual understanding plays a crucial role in teamwork.", ja: "相互理解はチームワークにおいて重要な役割を果たします。" },
        { en: "It is difficult to predict what will happen in the future.", ja: "将来何が起こるかを予測するのは困難です。" }, { en: "For this reason, we should be prepared for change.", ja: "この理由から、変化に備えるべきです。" }, { en: "Being flexible is one of the most important skills today.", ja: "柔軟であることは、今日最も重要な能力の一つです。" },
        { en: "What we need now is not speed but accuracy.", ja: "今必要なのは速さではなく正確さです。" }, { en: "The ability to learn continuously is essential.", ja: "継続的に学ぶ能力は不可欠です。" }, { en: "In the long run, small efforts can make a big difference.", ja: "長い目で見れば、小さな努力が大きな違いを生みます。" },
        { en: "There are many factors that influence our decisions.", ja: "私たちの判断に影響を与える要因は多くあります。" }, { en: "Among them, values play a particularly important role.", ja: "その中でも、価値観は特に重要な役割を果たします。" }, { en: "Our values are shaped by culture and experience.", ja: "私たちの価値観は文化や経験によって形作られます。" },
        { en: "It is up to each individual to decide what is right.", ja: "何が正しいかを決めるのは各個人次第です。" }, { en: "At the same time, we must respect the choices of others.", ja: "同時に、他人の選択を尊重しなければなりません。" }, { en: "Only by doing so can we live together peacefully.", ja: "そうして初めて、私たちは平和に共存できます。" },
        { en: "In conclusion, education remains the foundation of society.", ja: "結論として、教育は今も社会の基盤です。" }, { en: "The future depends largely on how we educate the next generation.", ja: "未来は次世代をどう教育するかに大きく依存します。" }, { en: "It is our responsibility to pass on knowledge and values.", ja: "知識と価値観を次世代に伝えるのは私たちの責任です。" },
        { en: "Never stop questioning what you are told.", ja: "与えられたことを疑うのをやめないでください。" }, { en: "Thinking deeply leads to better understanding.", ja: "深く考えることが、より良い理解につながります。" }, { en: "True learning continues throughout life.", ja: "真の学びは一生続きます。" }
    ],
    toeic: [
        { en: "The meeting will start at nine o'clock.", ja: "会議は9時に始まります。" },
        { en: "Please take a seat near the window.", ja: "窓の近くの席にお座りください。" },
        { en: "The documents are on the desk.", ja: "書類は机の上にあります。" },
        { en: "She is talking on the phone.", ja: "彼女は電話で話しています。" },
        { en: "He is looking at the schedule.", ja: "彼は予定表を見ています。" },
        { en: "The train has been delayed due to bad weather.", ja: "悪天候のため電車が遅れています。" },
        { en: "Please fill out this form.", ja: "この用紙に記入してください。" },
        { en: "The office will be closed tomorrow.", ja: "そのオフィスは明日休業です。" },
        { en: "She is arranging the chairs.", ja: "彼女は椅子を並べています。" },
        { en: "The report must be submitted by Friday.", ja: "その報告書は金曜日までに提出しなければなりません。" },
        { en: "He is giving a presentation.", ja: "彼はプレゼンテーションをしています。" },
        { en: "The package has just arrived.", ja: "荷物がちょうど届きました。" },
        { en: "Please check your email for details.", ja: "詳細についてはメールを確認してください。" },
        { en: "The restaurant is located across the street.", ja: "そのレストランは通りの向かいにあります。" },
        { en: "She is typing on her laptop.", ja: "彼女はノートパソコンで入力しています。" },
        { en: "The deadline has been extended.", ja: "締め切りが延長されました。" },
        { en: "He is waiting for a customer.", ja: "彼は顧客を待っています。" },
        { en: "The printer is out of paper.", ja: "プリンターの紙が切れています。" },
        { en: "Please let me know if you have any questions.", ja: "質問があれば知らせてください。" },
        { en: "The conference room is reserved.", ja: "会議室は予約されています。" },
        { en: "She is reviewing the contract.", ja: "彼女は契約書を確認しています。" },
        { en: "The flight has been canceled.", ja: "その便は欠航になりました。" },
        { en: "He is speaking with a colleague.", ja: "彼は同僚と話しています。" },
        { en: "The shelves are being restocked.", ja: "棚が補充されています。" },
        { en: "Please turn off your mobile phone.", ja: "携帯電話の電源を切ってください。" },
        { en: "The store opens at ten.", ja: "その店は10時に開きます。" },
        { en: "She is checking the inventory.", ja: "彼女は在庫を確認しています。" },
        { en: "The announcement will be made shortly.", ja: "まもなくアナウンスがあります。" },
        { en: "He is adjusting the microphone.", ja: "彼はマイクを調整しています。" },
        { en: "The office is being renovated.", ja: "オフィスは改装中です。" },
        { en: "Please wait in the lobby.", ja: "ロビーでお待ちください。" },
        { en: "The documents have been approved.", ja: "書類は承認されました。" },
        { en: "She is organizing the files.", ja: "彼女はファイルを整理しています。" },
        { en: "The workshop has been postponed.", ja: "その研修会は延期されました。" },
        { en: "He is checking the reservation.", ja: "彼は予約を確認しています。" },
        { en: "The elevator is out of service.", ja: "エレベーターは使用できません。" },
        { en: "Please sign at the bottom of the page.", ja: "ページの下に署名してください。" },
        { en: "The customer is waiting at the counter.", ja: "顧客がカウンターで待っています。" },
        { en: "She is preparing the materials.", ja: "彼女は資料を準備しています。" },
        { en: "The event will take place next week.", ja: "そのイベントは来週行われます。" },
        { en: "He is updating the website.", ja: "彼はウェブサイトを更新しています。" },
        { en: "The chairs are arranged in a circle.", ja: "椅子は円形に配置されています。" },
        { en: "Please make a copy of this document.", ja: "この書類のコピーを取ってください。" },
        { en: "The manager is in a meeting.", ja: "マネージャーは会議中です。" },
        { en: "She is looking for the conference room.", ja: "彼女は会議室を探しています。" },
        { en: "The store is offering a discount.", ja: "その店は割引を実施しています。" },
        { en: "He is repairing the equipment.", ja: "彼は機器を修理しています。" },
        { en: "The instructions are written on the board.", ja: "指示はボードに書かれています。" },
        { en: "Please arrive ten minutes early.", ja: "10分早く到着してください。" },
        { en: "The building is under construction.", ja: "その建物は建設中です。" },
        { en: "The meeting has been rescheduled.", ja: "会議は日程変更されました。" },
        { en: "She will call you back later.", ja: "彼女は後ほど折り返します。" },
        { en: "The order will be shipped tomorrow.", ja: "注文品は明日発送されます。" },
        { en: "He forgot to bring his ID.", ja: "彼は身分証を持ってくるのを忘れました。" },
        { en: "Please contact customer support.", ja: "カスタマーサポートにご連絡ください。" },
        { en: "The store will close early today.", ja: "その店は本日早く閉店します。" },
        { en: "She is explaining the procedure.", ja: "彼女は手順を説明しています。" },
        { en: "The price includes tax.", ja: "その価格には税金が含まれています。" },
        { en: "He is waiting for the next train.", ja: "彼は次の電車を待っています。" },
        { en: "The announcement was difficult to hear.", ja: "そのアナウンスは聞き取りにくかったです。" }
    ]
};

const EVALUATIONS = {
    S: { title: "神耳", message: "耳が英語モード全開！完璧なリスニング能力です。", icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 15l-3-7 7 2 3-7 3 7 7-2-3 7H5zm14 2H5v2h14v-2z" fill="#EAB308"/></svg>` },
    A: { title: "英耳マスター", message: "素晴らしい精度！ネイティブとの会話も余裕のレベルです。", icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" fill="#94A3B8"/><path d="M12 7l1.5 3h3.5l-2.5 2 1 3.5-3.5-2-3.5 2 1-3.5-2.5-2h3.5L12 7z" fill="#F8FAFC"/></svg>` },
    B: { title: "耳トレ上級", message: "基本はバッチリ。あと少しの慣れで飛躍的に伸びます！", icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#3B82F6"/></svg>` },
    C: { title: "伸びしろ∞", message: "今は耳を鳴らす時期。継続すれば必ず聴き取れるようになります！", icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="#94A3B8"/></svg>` }
};

// --- オーディオ管理 ---
const audioManager = {
    ctx: null,
    englishVoice: null,
    okAudio: null,

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (!this.okAudio) {
            this.okAudio = new Audio('ok.mp3');
            this.okAudio.preload = 'auto';
            this.okAudio.volume = 0.7;
        }
        this.loadVoices();
    },

    loadVoices() {
        const voices = window.speechSynthesis.getVoices();
        this.englishVoice = voices.find(v => v.lang.startsWith('en-') && v.name.includes('Samantha')) || 
                            voices.find(v => v.lang.startsWith('en-'));
    },

    unlockAudio() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
        const silentUttr = new SpeechSynthesisUtterance("");
        silentUttr.volume = 0;
        window.speechSynthesis.speak(silentUttr);
    },

    playPingPong() {
        if (this.okAudio) {
            this.okAudio.currentTime = 0;
            this.okAudio.play().catch(() => {});
            return;
        }
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const notes = [
            { freq: 1200, offset: 0.0, duration: 0.06, type: 'triangle' },
            { freq: 900, offset: 0.09, duration: 0.07, type: 'sine' }
        ];
        notes.forEach(({ freq, offset, duration, type }) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const startTime = now + offset;
            osc.type = type;
            osc.frequency.setValueAtTime(freq, startTime);
            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(0.12, startTime + 0.008);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(startTime); osc.stop(startTime + duration);
        });
    },

    playBuzz() {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(120, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.3);
    },

    beep(freq, duration) {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + duration);
    },

    speak(text, lang = 'en-US', callback = null) {
        window.speechSynthesis.cancel();
        const uttr = new SpeechSynthesisUtterance(text);
        if (lang.startsWith('en-')) {
            if (!this.englishVoice) this.loadVoices();
            if (this.englishVoice) uttr.voice = this.englishVoice;
        }
        uttr.lang = lang;
        uttr.rate = 0.85;
        if (callback) { uttr.onend = callback; }
        window.speechSynthesis.speak(uttr);
    },

    replaySentence() {
        if (game.status === 'playing') {
            this.speak(game.selectedQuestions[game.currentIndex].en, 'en-US');
        }
    },

    startResultBGM(type) {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const playNote = (freq, startTime, duration, vol = 0.08, oscType = 'sine') => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = oscType;
            osc.frequency.setValueAtTime(freq, startTime);
            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(vol, startTime + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(startTime); osc.stop(startTime + duration);
        };
        const playChord = (freqs, startTime, duration, vol = 0.06, oscType = 'sine') => {
            freqs.forEach(f => {
                playNote(f, startTime, duration, vol, oscType);
            });
        };
        if (type === 'happy') {
            [
                { freq: 523, offset: 0.0, duration: 0.12 },
                { freq: 659, offset: 0.12, duration: 0.12 },
                { freq: 784, offset: 0.24, duration: 0.12 },
                { freq: 1046, offset: 0.36, duration: 0.18 },
                { freq: 988, offset: 0.58, duration: 0.12 },
                { freq: 1046, offset: 0.7, duration: 0.2 }
            ].forEach(({ freq, offset, duration }) => {
                playNote(freq, now + offset, duration, 0.08, 'triangle');
            });
            playChord([262, 330, 392], now + 0.02, 0.55, 0.05, 'sine');
            playChord([294, 370, 440], now + 0.6, 0.5, 0.05, 'sine');
            playChord([262, 330, 392], now + 1.05, 0.7, 0.06, 'sine');
        } else {
            [
                { freq: 440, offset: 0.0, duration: 0.16 },
                { freq: 392, offset: 0.18, duration: 0.16 },
                { freq: 349, offset: 0.36, duration: 0.18 },
                { freq: 330, offset: 0.56, duration: 0.18 },
                { freq: 294, offset: 0.76, duration: 0.2 },
                { freq: 262, offset: 0.98, duration: 0.24 }
            ].forEach(({ freq, offset, duration }) => {
                playNote(freq, now + offset, duration, 0.065, 'sine');
            });
            playChord([220, 262, 330], now + 0.02, 0.65, 0.045, 'sine');
            playChord([196, 233, 294], now + 0.7, 0.6, 0.04, 'sine');
            playChord([220, 262, 330], now + 1.25, 0.7, 0.045, 'sine');
        }
    }
};

window.speechSynthesis.onvoiceschanged = () => audioManager.loadVoices();

// --- メインゲームロジック ---
const game = {
    status: 'start',
    currentIndex: 0,
    mistakes: 0,
    hintsUsed: 0,
    selectedQuestions: [],
    currentSentenceData: [],
    currentLevel: '',
    questionMistakes: [0, 0, 0, 0, 0], 
    questionHints: [0, 0, 0, 0, 0],
    questionMistakeIndices: [],
    isProcessingInput: false, 

    init() {
        this.showScreen('screenStart');
    },

    start(level) {
        this.showScreen('screenPlay');
        audioManager.init();
        audioManager.unlockAudio();

        this.currentLevel = level;
        this.currentIndex = 0;
        this.mistakes = 0;
        this.hintsUsed = 0;
        this.questionMistakes = [0, 0, 0, 0, 0];
        this.questionHints = [0, 0, 0, 0, 0];
        this.questionMistakeIndices = Array.from({ length: 5 }, () => new Set());
        
        const pool = MASTER_DATA[level];
        this.selectedQuestions = [...pool].sort(() => Math.random() - 0.5).slice(0, 5);
        
        this.status = 'playing';
        this.updateUIForLevel();
        this.loadQuestion();
        
        setTimeout(() => this.focusInput(), 100);
    },

    focusInput() {
        const input = document.getElementById('hiddenInput');
        if (input) input.focus();
    },

    updateUIForLevel() {
        const badge = document.getElementById('levelBadge');
        if (!badge) return;
        if (this.currentLevel === 'junior') {
            badge.innerText = '中学生レベル';
            badge.className = 'text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-600 w-fit mb-1 uppercase tracking-tighter';
        } else if (this.currentLevel === 'senior') {
            badge.innerText = '高校生レベル';
            badge.className = 'text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 w-fit mb-1 uppercase tracking-tighter';
        } else {
            badge.innerText = 'TOEIC対策';
            badge.className = 'text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 w-fit mb-1 uppercase tracking-tighter';
        }
    },

    loadQuestion() {
        const q = this.selectedQuestions[this.currentIndex];
        const sentence = q.en;
        this.currentSentenceData = [];
        const transArea = document.getElementById('translationDisplay');
        if (transArea) {
            const wasVisible = transArea.style.opacity === '1';
            transArea.style.opacity = '0';
            transArea.classList.remove('translate-y-0');
            transArea.classList.add('translate-y-2');
            const updateText = () => { transArea.innerText = q.ja; };
            if (wasVisible) {
                setTimeout(updateText, 300);
            } else {
                updateText();
            }
        }

        let isWordStart = true;
        for (let i = 0; i < sentence.length; i++) {
            const char = sentence[i];
            const isAlphabet = /[a-z]/i.test(char);
            if (isAlphabet) {
                if (isWordStart) {
                    this.currentSentenceData.push({ char, isTarget: false, state: 'correct' });
                    isWordStart = false;
                } else {
                    this.currentSentenceData.push({ char, isTarget: true, state: 'hidden' });
                }
            } else {
                this.currentSentenceData.push({ char, isTarget: false, state: 'correct' });
                if (char === ' ') isWordStart = true;
            }
        }
        this.render();
        const prog = document.getElementById('progressText');
        if (prog) prog.innerText = `${this.currentIndex + 1} / 5`;
        setTimeout(() => audioManager.speak(sentence, 'en-US'), 600);
    },

    render() {
        const container = document.getElementById('sentenceDisplay');
        if (!container) return;
        container.innerHTML = '';
        const nextTargetIdx = this.currentSentenceData.findIndex(d => d.isTarget && d.state === 'hidden');
        let currentWordWrapper = document.createElement('span');
        currentWordWrapper.className = 'word-wrapper';
        container.appendChild(currentWordWrapper);
        
        this.currentSentenceData.forEach((item, idx) => {
            if (item.char === ' ') {
                currentWordWrapper = document.createElement('span');
                currentWordWrapper.className = 'word-wrapper';
                container.appendChild(currentWordWrapper);
                return;
            }
            const span = document.createElement('span');
            span.className = 'char-slot';
            if (item.isTarget) {
                if (item.state === 'hidden') {
                    span.innerText = ''; 
                    span.classList.add('char-masked');
                    if (idx === nextTargetIdx) span.classList.add('cursor');
                } else {
                    span.innerText = item.char;
                    span.classList.add(item.state === 'correct' ? 'char-correct' : 'char-hint');
                }
            } else {
                span.innerText = item.char;
                span.classList.add('char-static');
            }
            currentWordWrapper.appendChild(span);
        });
    },

    handleInput(key) {
        if (this.status !== 'playing' || this.isProcessingInput) return;
        
        const nextTargetIdx = this.currentSentenceData.findIndex(d => d.isTarget && d.state === 'hidden');
        if (nextTargetIdx === -1) return;

        this.isProcessingInput = true;

        const targetChar = this.currentSentenceData[nextTargetIdx].char;
        const lowerKey = key.toLowerCase();
        const lowerTarget = targetChar.toLowerCase();

        if (lowerKey === lowerTarget) {
            this.currentSentenceData[nextTargetIdx].state = 'correct';
            audioManager.beep(520, 0.06);
            this.render();
            this.checkCompletion();
        } else {
            if (nextTargetIdx > 0) {
                const prevChar = this.currentSentenceData[nextTargetIdx - 1].char;
                if (lowerKey === prevChar.toLowerCase()) {
                    this.isProcessingInput = false;
                    return;
                }
            }
            const lastAnsweredIdx = (() => {
                for (let i = nextTargetIdx - 1; i >= 0; i--) {
                    const item = this.currentSentenceData[i];
                    if (item.isTarget) return i;
                }
                return -1;
            })();
            if (lastAnsweredIdx >= 0) {
                for (let i = lastAnsweredIdx + 1; i < nextTargetIdx; i++) {
                    const item = this.currentSentenceData[i];
                    if (!item.isTarget && item.char.toLowerCase() === lowerKey) {
                        this.isProcessingInput = false;
                        return;
                    }
                }
            }
            this.mistakes++;
            this.questionMistakes[this.currentIndex]++;
            if (this.currentSentenceData[nextTargetIdx]) {
                this.currentSentenceData[nextTargetIdx].mistake = true;
            }
            if (this.questionMistakeIndices[this.currentIndex]) {
                this.questionMistakeIndices[this.currentIndex].add(nextTargetIdx);
            }
            audioManager.playBuzz();
        }

        setTimeout(() => { this.isProcessingInput = false; }, 50);
    },

    useHint() {
        if (this.status !== 'playing') return;
        const nextTargetIdx = this.currentSentenceData.findIndex(d => d.isTarget && d.state === 'hidden');
        if (nextTargetIdx === -1) return;
        this.hintsUsed++;
        this.questionHints[this.currentIndex]++; 
        this.currentSentenceData[nextTargetIdx].state = 'hint';
        this.render();
        this.checkCompletion();
        this.focusInput();
    },

    checkCompletion() {
        const isFinished = this.currentSentenceData.every(d => !d.isTarget || d.state !== 'hidden');
        if (isFinished) {
            this.status = 'cleared';
            audioManager.playPingPong();
            this.showClearEffect();
            this.captureMistakesForCurrentQuestion();
            const transArea = document.getElementById('translationDisplay');
            if (transArea) {
                transArea.style.opacity = '1';
                transArea.classList.remove('translate-y-2');
                transArea.classList.add('translate-y-0');
            }
            setTimeout(() => this.nextQuestion(), 2000);
        }
    },

    nextQuestion() {
        this.currentIndex++;
        if (this.currentIndex < 5) {
            this.status = 'playing';
            this.loadQuestion();
            this.focusInput();
        } else {
            this.finishGame();
        }
    },

    showClearEffect() {
        const overlay = document.getElementById('successOverlay');
        if (overlay) {
            overlay.classList.add('show-overlay');
            setTimeout(() => overlay.classList.remove('show-overlay'), 1000);
        }
    },

    finishGame() {
        this.status = 'result';
        const score = Math.max(0, 100 - (this.mistakes * 2) - (this.hintsUsed * 5));
        
        let rankKey = 'C';
        if (score >= 90) rankKey = 'S';
        else if (score >= 70) rankKey = 'A';
        else if (score >= 50) rankKey = 'B';

        const evalData = EVALUATIONS[rankKey];
        const bgmType = (rankKey === 'S' || rankKey === 'A') ? 'happy' : 'sad';
        const colorClass = rankKey === 'S' ? 'text-yellow-500' : rankKey === 'A' ? 'text-green-500' : rankKey === 'B' ? 'text-blue-500' : 'text-gray-400';

        const label = document.getElementById('rankLabel');
        if (label) {
            label.innerText = evalData.title;
            label.className = `font-black tracking-tighter transition-all duration-500 ${colorClass} text-3xl md:text-4xl leading-tight`;
        }
        
        const illust = document.getElementById('rankIllustration');
        if (illust) illust.innerHTML = evalData.icon;
        
        const msg = document.getElementById('rankMessage');
        if (msg) msg.innerText = evalData.message;
        
        const miss = document.getElementById('statMiss');
        if (miss) miss.innerText = `${this.mistakes} 回`;
        
        const hint = document.getElementById('statHint');
        if (hint) hint.innerText = `${this.hintsUsed} 回`;
        
        const sc = document.getElementById('statScore');
        if (sc) sc.innerText = score;
        
        this.showScreen('screenResult');
        audioManager.startResultBGM(bgmType);
    },

    showReview() {
        const list = document.getElementById('reviewList');
        if (!list) return;
        list.innerHTML = '';
        this.selectedQuestions.forEach((q, i) => {
            const mCount = this.questionMistakes[i];
            const hCount = this.questionHints[i];
            const mistakeSet = this.questionMistakeIndices[i];
            const sentenceHtml = this.formatReviewSentence(q.en, mistakeSet);
            const mistakeColor = mCount > 0 ? 'text-red-500 border-red-100' : 'text-green-500 border-green-100';
            const hintColor = hCount > 0 ? 'text-red-500 border-red-100' : 'text-slate-400 border-slate-100';
            const item = document.createElement('div');
            item.className = 'bg-slate-50 border border-slate-200 p-4 rounded-xl flex justify-between items-center mb-2';
            item.innerHTML = `
                <div class="flex-grow">
                    <div class="flex flex-wrap items-center gap-2 mb-1">
                        <span class="text-[10px] text-white bg-slate-400 px-1.5 py-0.5 rounded font-bold uppercase">Mission ${i + 1}</span>
                        <span class="text-[10px] font-bold ${mistakeColor} bg-white border px-2 py-0.5 rounded-full shadow-sm">ミス: ${mCount}</span>
                        <span class="text-[10px] font-bold ${hintColor} bg-white border px-2 py-0.5 rounded-full shadow-sm">ヒント: ${hCount}</span>
                    </div>
                    <div class="text-lg font-bold text-gray-800 leading-tight mb-1">${sentenceHtml}</div>
                    <div class="text-sm text-blue-500 font-bold">${q.ja}</div>
                </div>
                <button type="button" onclick="audioManager.speak('${q.en.replace(/'/g, "\\'")}', 'en-US')" class="ml-4 p-2 bg-white border border-slate-200 rounded-full text-blue-500 shadow-sm self-start mt-2 active:bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H3a1 1 0 01-1-1V8a1 1 0 011-1h1.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.414 4.243 1 1 0 11-1.415-1.415A3.983 3.983 0 0013 10a3.983 3.983 0 00-1.071-2.757 1 1 0 010-1.415z" clip-rule="evenodd" /></svg>
                </button>
            `;
            list.appendChild(item);
        });
        this.showScreen('screenReview');
    },

    captureMistakesForCurrentQuestion() {
        const mistakeSet = new Set();
        this.currentSentenceData.forEach((item, idx) => {
            if (item.mistake) mistakeSet.add(idx);
        });
        this.questionMistakeIndices[this.currentIndex] = mistakeSet;
    },

    formatReviewSentence(sentence, mistakeSet) {
        const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[char]);
        return Array.from(sentence).map((char, idx) => {
            const safe = escapeHtml(char);
            if (mistakeSet && mistakeSet.has(idx)) {
                return `<span class="review-miss">${safe}</span>`;
            }
            return safe;
        }).join('');
    },

    showScreen(id) {
        ['screenStart', 'screenPlay', 'screenResult', 'screenReview'].forEach(s => {
            const el = document.getElementById(s);
            if (el) el.classList.add('hidden');
        });
        const target = document.getElementById(id);
        if (target) target.classList.remove('hidden');
    }
};

// --- イベントリスナー ---
const hiddenInput = document.getElementById('hiddenInput');
const imeWarning = document.getElementById('imeWarning');

if (hiddenInput) {
    hiddenInput.addEventListener('compositionstart', () => {
        if (imeWarning) imeWarning.style.display = 'block';
    });
    hiddenInput.addEventListener('compositionend', () => {
        if (imeWarning) imeWarning.style.display = 'none';
        hiddenInput.value = '';
    });
    hiddenInput.addEventListener('input', (e) => {
        if (e.isComposing) return;
        let val = hiddenInput.value;
        if (val.length > 0) {
            let char = val.slice(-1);
            if (char && char.length === 1 && /[a-zA-Z]/.test(char)) {
                game.handleInput(char);
            }
        }
        hiddenInput.value = '';
    });
}

window.addEventListener('keydown', (e) => {
    const isSpace = e.code === 'Space' || e.key === ' ';
    if (!isSpace) return;
    e.preventDefault();
    audioManager.replaySentence();
    game.focusInput();
});

window.onload = () => {
    game.init();
    window.speechSynthesis.getVoices();
};
