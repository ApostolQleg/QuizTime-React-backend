export const defaultQuizzes = {
	quizzes: [
		// --- ТЕСТ 1: Англійська мова (A1) ---
		{
			title: "Тест з англійської мови (A1)",
			description: "Перевір свої базові знання англійських слів і граматики.",
			id: "0",
			questions: [
				{
					id: 0,
					text: "Як сказати 'яблуко' англійською?",
					options: [
						{ text: "pear", id: 0, isCorrect: false },
						{ text: "apple", id: 1, isCorrect: true },
						{ text: "orange", id: 2, isCorrect: false },
						{ text: "banana", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "Оберіть правильне дієслово: 'They ___ from Ukraine.'",
					options: [
						{ text: "is", id: 0, isCorrect: false },
						{ text: "am", id: 1, isCorrect: false },
						{ text: "are", id: 2, isCorrect: true },
						{ text: "be", id: 3, isCorrect: false },
					],
				},
				{
					id: 2,
					text: "Як перекладається слово 'red'?",
					options: [
						{ text: "Синій", id: 0, isCorrect: false },
						{ text: "Зелений", id: 1, isCorrect: false },
						{ text: "Червоний", id: 2, isCorrect: true },
						{ text: "Жовтий", id: 3, isCorrect: false },
					],
				},
				{
					id: 3,
					text: "Яке число йде після 'two'?",
					options: [
						{ text: "one", id: 0, isCorrect: false },
						{ text: "three", id: 1, isCorrect: true },
						{ text: "four", id: 2, isCorrect: false },
						{ text: "five", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "Оберіть правильний займенник: '___ is my sister.'",
					options: [
						{ text: "He", id: 0, isCorrect: false },
						{ text: "She", id: 1, isCorrect: true },
						{ text: "It", id: 2, isCorrect: false },
						{ text: "You", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "Як сказати 'кіт' англійською?",
					options: [
						{ text: "dog", id: 0, isCorrect: false },
						{ text: "bird", id: 1, isCorrect: false },
						{ text: "cat", id: 2, isCorrect: true },
						{ text: "mouse", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "Антонім до слова 'big' (великий):",
					options: [
						{ text: "large", id: 0, isCorrect: false },
						{ text: "small", id: 1, isCorrect: true },
						{ text: "huge", id: 2, isCorrect: false },
						{ text: "tall", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "Вставте артикль: 'I have ___ car.'",
					options: [
						{ text: "a", id: 0, isCorrect: true },
						{ text: "an", id: 1, isCorrect: false },
						{ text: "two", id: 2, isCorrect: false },
						{ text: "many", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "Як перекладається 'Good morning'?",
					options: [
						{ text: "Добрий вечір", id: 0, isCorrect: false },
						{ text: "На добраніч", id: 1, isCorrect: false },
						{ text: "Добрий ранок", id: 2, isCorrect: true },
						{ text: "Привіт", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "Оберіть день тижня:",
					options: [
						{ text: "January", id: 0, isCorrect: false },
						{ text: "Monday", id: 1, isCorrect: true },
						{ text: "Spring", id: 2, isCorrect: false },
						{ text: "Morning", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "Як сказати 'дякую'?",
					options: [
						{ text: "Please", id: 0, isCorrect: false },
						{ text: "Sorry", id: 1, isCorrect: false },
						{ text: "Thank you", id: 2, isCorrect: true },
						{ text: "Excuse me", id: 3, isCorrect: false },
					],
				},
				{
					id: 11,
					text: "Оберіть правильну форму: 'I ___ (like) pizza.'",
					options: [
						{ text: "likes", id: 0, isCorrect: false },
						{ text: "like", id: 1, isCorrect: true },
						{ text: "liking", id: 2, isCorrect: false },
						{ text: "to like", id: 3, isCorrect: false },
					],
				},
			],
		},
		// --- ТЕСТ 2: Англійська мова (A2) ---
		{
			title: "Тест з англійської мови (A2)",
			description: "Перевір свої знання часів та структури речень.",
			id: "1",
			questions: [
				{
					id: 0,
					text: "Яке слово означає 'подорож'?",
					options: [
						{ text: "Journey", id: 0, isCorrect: true },
						{ text: "Work", id: 1, isCorrect: false },
						{ text: "Home", id: 2, isCorrect: false },
						{ text: "Street", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "Оберіть минулу форму дієслова 'go':",
					options: [
						{ text: "goed", id: 0, isCorrect: false },
						{ text: "gone", id: 1, isCorrect: false },
						{ text: "went", id: 2, isCorrect: true },
						{ text: "going", id: 3, isCorrect: false },
					],
				},
				{
					id: 2,
					text: "Як сказати 'веселий' або 'радісний'?",
					options: [
						{ text: "sad", id: 0, isCorrect: false },
						{ text: "angry", id: 1, isCorrect: false },
						{ text: "tired", id: 2, isCorrect: false },
						{ text: "cheerful", id: 3, isCorrect: true },
					],
				},
				{
					id: 3,
					text: "This car is ___ than that one.",
					options: [
						{ text: "fast", id: 0, isCorrect: false },
						{ text: "faster", id: 1, isCorrect: true },
						{ text: "fastest", id: 2, isCorrect: false },
						{ text: "more fast", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "I ___ tv when she called.",
					options: [
						{ text: "watched", id: 0, isCorrect: false },
						{ text: "was watching", id: 1, isCorrect: true },
						{ text: "am watching", id: 2, isCorrect: false },
						{ text: "watch", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "Оберіть синонім до слова 'start':",
					options: [
						{ text: "finish", id: 0, isCorrect: false },
						{ text: "end", id: 1, isCorrect: false },
						{ text: "begin", id: 2, isCorrect: true },
						{ text: "stop", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "We don't have ___ milk left.",
					options: [
						{ text: "some", id: 0, isCorrect: false },
						{ text: "any", id: 1, isCorrect: true },
						{ text: "no", id: 2, isCorrect: false },
						{ text: "many", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "Який прийменник правильний: 'She is good ___ math.'",
					options: [
						{ text: "on", id: 0, isCorrect: false },
						{ text: "in", id: 1, isCorrect: false },
						{ text: "at", id: 2, isCorrect: true },
						{ text: "for", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "Yesterday I ___ a new dress.",
					options: [
						{ text: "buy", id: 0, isCorrect: false },
						{ text: "bought", id: 1, isCorrect: true },
						{ text: "buyed", id: 2, isCorrect: false },
						{ text: "buying", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "My brother is the ___ student in the class.",
					options: [
						{ text: "tall", id: 0, isCorrect: false },
						{ text: "taller", id: 1, isCorrect: false },
						{ text: "tallest", id: 2, isCorrect: true },
						{ text: "most tall", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "You ___ smoke here. It is forbidden.",
					options: [
						{ text: "mustn't", id: 0, isCorrect: true },
						{ text: "don't have to", id: 1, isCorrect: false },
						{ text: "can", id: 2, isCorrect: false },
						{ text: "should", id: 3, isCorrect: false },
					],
				},
				{
					id: 11,
					text: "Як перекладається 'expensive'?",
					options: [
						{ text: "дешевий", id: 0, isCorrect: false },
						{ text: "дорогий", id: 1, isCorrect: true },
						{ text: "красивий", id: 2, isCorrect: false },
						{ text: "важкий", id: 3, isCorrect: false },
					],
				},
			],
		},
		// --- ТЕСТ 3: Англійська мова (B1) ---
		{
			title: "Тест з англійської мови (B1)",
			description: "Перевір свої знання Present Perfect та умовних речень.",
			id: "2",
			questions: [
				{
					id: 0,
					text: "Оберіть правильну форму: 'I ___ (live) in this city for ten years.'",
					options: [
						{ text: "lived", id: 0, isCorrect: false },
						{ text: "have lived", id: 1, isCorrect: true },
						{ text: "am living", id: 2, isCorrect: false },
						{ text: "will live", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "Доповніть речення: 'If I were rich, I ___ a mansion.'",
					options: [
						{ text: "will buy", id: 0, isCorrect: false },
						{ text: "would buy", id: 1, isCorrect: true },
						{ text: "buy", id: 2, isCorrect: false },
						{ text: "have bought", id: 3, isCorrect: false },
					],
				},
				{
					id: 2,
					text: "Що означає 'reliable'?",
					options: [
						{ text: "швидкий", id: 0, isCorrect: false },
						{ text: "дорогий", id: 1, isCorrect: false },
						{ text: "надійний", id: 2, isCorrect: true },
						{ text: "складний", id: 3, isCorrect: false },
					],
				},
				{
					id: 3,
					text: "The letter ___ by the secretary yesterday.",
					options: [
						{ text: "writes", id: 0, isCorrect: false },
						{ text: "wrote", id: 1, isCorrect: false },
						{ text: "was written", id: 2, isCorrect: true },
						{ text: "is written", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "I look forward ___ you.",
					options: [
						{ text: "to see", id: 0, isCorrect: false },
						{ text: "to seeing", id: 1, isCorrect: true },
						{ text: "seeing", id: 2, isCorrect: false },
						{ text: "see", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "Оберіть фразове дієслово 'здаватися' (припиняти спроби):",
					options: [
						{ text: "give up", id: 0, isCorrect: true },
						{ text: "get up", id: 1, isCorrect: false },
						{ text: "look up", id: 2, isCorrect: false },
						{ text: "make up", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "He said that he ___ tired.",
					options: [
						{ text: "is", id: 0, isCorrect: false },
						{ text: "has been", id: 1, isCorrect: false },
						{ text: "was", id: 2, isCorrect: true },
						{ text: "will be", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "Unless you ___, you will be late.",
					options: [
						{ text: "hurry", id: 0, isCorrect: true },
						{ text: "don't hurry", id: 1, isCorrect: false },
						{ text: "will hurry", id: 2, isCorrect: false },
						{ text: "hurried", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "Що означає 'environment'?",
					options: [
						{ text: "уряд", id: 0, isCorrect: false },
						{ text: "довкілля", id: 1, isCorrect: true },
						{ text: "розвага", id: 2, isCorrect: false },
						{ text: "освіта", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "I wish I ___ play the guitar.",
					options: [
						{ text: "can", id: 0, isCorrect: false },
						{ text: "could", id: 1, isCorrect: true },
						{ text: "will", id: 2, isCorrect: false },
						{ text: "am", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "By the time we arrived, the film ___ already ___.",
					options: [
						{ text: "has / started", id: 0, isCorrect: false },
						{ text: "had / started", id: 1, isCorrect: true },
						{ text: "was / started", id: 2, isCorrect: false },
						{ text: "is / starting", id: 3, isCorrect: false },
					],
				},
				{
					id: 11,
					text: "We ran out ___ sugar.",
					options: [
						{ text: "of", id: 0, isCorrect: true },
						{ text: "off", id: 1, isCorrect: false },
						{ text: "from", id: 2, isCorrect: false },
						{ text: "with", id: 3, isCorrect: false },
					],
				},
			],
		},
		// --- ТЕСТ 4: Історія України ---
		{
			title: "Тест: Історія України (Базовий)",
			description: "Перевірте знання ключових подій української історії.",
			id: "3",
			questions: [
				{
					id: 0,
					text: "В якому році було проголошено незалежність України?",
					options: [
						{ text: "1989", id: 0, isCorrect: false },
						{ text: "1991", id: 1, isCorrect: true },
						{ text: "1996", id: 2, isCorrect: false },
						{ text: "2004", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "Хто був автором слів гімну України?",
					options: [
						{ text: "Тарас Шевченко", id: 0, isCorrect: false },
						{ text: "Павло Чубинський", id: 1, isCorrect: true },
						{ text: "Леся Українка", id: 2, isCorrect: false },
						{ text: "Михайло Вербицький", id: 3, isCorrect: false },
					],
				},
				{
					id: 2,
					text: "Коли відбулася Помаранчева революція?",
					options: [
						{ text: "1991", id: 0, isCorrect: false },
						{ text: "2000", id: 1, isCorrect: false },
						{ text: "2004", id: 2, isCorrect: true },
						{ text: "2014", id: 3, isCorrect: false },
					],
				},
				{
					id: 3,
					text: "Кого називають 'Великим Кобзарем'?",
					options: [
						{ text: "Івана Франка", id: 0, isCorrect: false },
						{ text: "Богдана Хмельницького", id: 1, isCorrect: false },
						{ text: "Тараса Шевченка", id: 2, isCorrect: true },
						{ text: "Григорія Сковороду", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "В якому році було прийнято Конституцію України?",
					options: [
						{ text: "1991", id: 0, isCorrect: false },
						{ text: "1996", id: 1, isCorrect: true },
						{ text: "2000", id: 2, isCorrect: false },
						{ text: "2014", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "Хто охрестив Київську Русь?",
					options: [
						{ text: "Ярослав Мудрий", id: 0, isCorrect: false },
						{ text: "Княгиня Ольга", id: 1, isCorrect: false },
						{ text: "Володимир Великий", id: 2, isCorrect: true },
						{ text: "Данило Галицький", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "Рік хрещення Київської Русі:",
					options: [
						{ text: "988", id: 0, isCorrect: true },
						{ text: "1054", id: 1, isCorrect: false },
						{ text: "1240", id: 2, isCorrect: false },
						{ text: "1199", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "Гетьман, який очолив Національно-визвольну війну 1648 року:",
					options: [
						{ text: "Іван Мазепа", id: 0, isCorrect: false },
						{ text: "Богдан Хмельницький", id: 1, isCorrect: true },
						{ text: "Петро Сагайдачний", id: 2, isCorrect: false },
						{ text: "Пилип Орлик", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "На якій купюрі зображено Лесю Українку?",
					options: [
						{ text: "100 грн", id: 0, isCorrect: false },
						{ text: "50 грн", id: 1, isCorrect: false },
						{ text: "200 грн", id: 2, isCorrect: true },
						{ text: "500 грн", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "Хто був першим Президентом незалежної України?",
					options: [
						{ text: "Леонід Кучма", id: 0, isCorrect: false },
						{ text: "Леонід Кравчук", id: 1, isCorrect: true },
						{ text: "Віктор Ющенко", id: 2, isCorrect: false },
						{ text: "В'ячеслав Чорновіл", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "Як називалася козацька держава?",
					options: [
						{ text: "Київська Русь", id: 0, isCorrect: false },
						{ text: "Військо Запорозьке (Гетьманщина)", id: 1, isCorrect: true },
						{ text: "Галицько-Волинське князівство", id: 2, isCorrect: false },
						{ text: "УНР", id: 3, isCorrect: false },
					],
				},
				{
					id: 11,
					text: "День Соборності України відзначають:",
					options: [
						{ text: "24 серпня", id: 0, isCorrect: false },
						{ text: "28 червня", id: 1, isCorrect: false },
						{ text: "22 січня", id: 2, isCorrect: true },
						{ text: "14 жовтня", id: 3, isCorrect: false },
					],
				},
			],
		},
		// --- ТЕСТ 5: Математика ---
		{
			title: "Тест з Математики (Алгебра)",
			description: "Перевірка базових знань з алгебри.",
			id: "4",
			questions: [
				{
					id: 0,
					text: "Який результат виразу: 5 * (4 + 2) - 10?",
					options: [
						{ text: "20", id: 0, isCorrect: true },
						{ text: "30", id: 1, isCorrect: false },
						{ text: "10", id: 2, isCorrect: false },
						{ text: "15", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "Чому дорівнює $\\sqrt{81}$?",
					options: [
						{ text: "7", id: 0, isCorrect: false },
						{ text: "9", id: 1, isCorrect: true },
						{ text: "8.1", id: 2, isCorrect: false },
						{ text: "40.5", id: 3, isCorrect: false },
					],
				},
				{
					id: 2,
					text: "Розв'яжіть рівняння: 2x + 5 = 15",
					options: [
						{ text: "x = 10", id: 0, isCorrect: false },
						{ text: "x = 7.5", id: 1, isCorrect: false },
						{ text: "x = 5", id: 2, isCorrect: true },
						{ text: "x = 2.5", id: 3, isCorrect: false },
					],
				},
				{
					id: 3,
					text: "Скільки градусів у прямому куті?",
					options: [
						{ text: "45", id: 0, isCorrect: false },
						{ text: "90", id: 1, isCorrect: true },
						{ text: "180", id: 2, isCorrect: false },
						{ text: "360", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "Чому дорівнює $2^3$?",
					options: [
						{ text: "6", id: 0, isCorrect: false },
						{ text: "8", id: 1, isCorrect: true },
						{ text: "5", id: 2, isCorrect: false },
						{ text: "9", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "Площа прямокутника зі сторонами 5 см і 8 см:",
					options: [
						{ text: "13 см²", id: 0, isCorrect: false },
						{ text: "26 см²", id: 1, isCorrect: false },
						{ text: "40 см²", id: 2, isCorrect: true },
						{ text: "20 см²", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "Знайдіть 20% від числа 200:",
					options: [
						{ text: "20", id: 0, isCorrect: false },
						{ text: "40", id: 1, isCorrect: true },
						{ text: "50", id: 2, isCorrect: false },
						{ text: "100", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "Що більше: -5 чи -2?",
					options: [
						{ text: "-5", id: 0, isCorrect: false },
						{ text: "-2", id: 1, isCorrect: true },
						{ text: "Вони рівні", id: 2, isCorrect: false },
						{ text: "Неможливо визначити", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "Скільки буде 7 * 8?",
					options: [
						{ text: "54", id: 0, isCorrect: false },
						{ text: "56", id: 1, isCorrect: true },
						{ text: "64", id: 2, isCorrect: false },
						{ text: "48", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "Сума кутів трикутника дорівнює:",
					options: [
						{ text: "90 градусів", id: 0, isCorrect: false },
						{ text: "180 градусів", id: 1, isCorrect: true },
						{ text: "360 градусів", id: 2, isCorrect: false },
						{ text: "270 градусів", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "Розв'яжіть: 100 / 0",
					options: [
						{ text: "0", id: 0, isCorrect: false },
						{ text: "100", id: 1, isCorrect: false },
						{ text: "1", id: 2, isCorrect: false },
						{ text: "Ділення на нуль неможливе", id: 3, isCorrect: true },
					],
				},
				{
					id: 11,
					text: "Яке число є простим?",
					options: [
						{ text: "4", id: 0, isCorrect: false },
						{ text: "9", id: 1, isCorrect: false },
						{ text: "13", id: 2, isCorrect: true },
						{ text: "15", id: 3, isCorrect: false },
					],
				},
			],
		},
		// --- ТЕСТ 6: Географія ---
		{
			title: "Тест з Географії (Світ)",
			description: "Перевір свої знання столиць та континентів.",
			id: "5",
			questions: [
				{
					id: 0,
					text: "Яка столиця Канади?",
					options: [
						{ text: "Торонто", id: 0, isCorrect: false },
						{ text: "Ванкувер", id: 1, isCorrect: false },
						{ text: "Оттава", id: 2, isCorrect: true },
						{ text: "Монреаль", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "Який найменший континент?",
					options: [
						{ text: "Європа", id: 0, isCorrect: false },
						{ text: "Австралія", id: 1, isCorrect: true },
						{ text: "Антарктида", id: 2, isCorrect: false },
						{ text: "Південна Америка", id: 3, isCorrect: false },
					],
				},
				{
					id: 2,
					text: "Яка річка є найдовшою у світі?",
					options: [
						{ text: "Ніл", id: 0, isCorrect: false },
						{ text: "Амазонка", id: 1, isCorrect: true },
						{ text: "Міссісіпі", id: 2, isCorrect: false },
						{ text: "Янцзи", id: 3, isCorrect: false },
					],
				},
				{
					id: 3,
					text: "Столиця Франції:",
					options: [
						{ text: "Берлін", id: 0, isCorrect: false },
						{ text: "Лондон", id: 1, isCorrect: false },
						{ text: "Париж", id: 2, isCorrect: true },
						{ text: "Мадрид", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "Скільки континентів на Землі?",
					options: [
						{ text: "5", id: 0, isCorrect: false },
						{ text: "6", id: 1, isCorrect: true },
						{ text: "7", id: 2, isCorrect: false },
						{ text: "8", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "Яка пустеля найбільша у світі (спекотна)?",
					options: [
						{ text: "Гобі", id: 0, isCorrect: false },
						{ text: "Калахарі", id: 1, isCorrect: false },
						{ text: "Сахара", id: 2, isCorrect: true },
						{ text: "Атакама", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "В якій країні знаходяться піраміди Гізи?",
					options: [
						{ text: "Мексика", id: 0, isCorrect: false },
						{ text: "Єгипет", id: 1, isCorrect: true },
						{ text: "Перу", id: 2, isCorrect: false },
						{ text: "Індія", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "Який океан найбільший?",
					options: [
						{ text: "Атлантичний", id: 0, isCorrect: false },
						{ text: "Індійський", id: 1, isCorrect: false },
						{ text: "Тихий", id: 2, isCorrect: true },
						{ text: "Північний Льодовитий", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "Столиця Японії:",
					options: [
						{ text: "Пекін", id: 0, isCorrect: false },
						{ text: "Сеул", id: 1, isCorrect: false },
						{ text: "Токіо", id: 2, isCorrect: true },
						{ text: "Кіото", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "Найвища гора світу:",
					options: [
						{ text: "К2", id: 0, isCorrect: false },
						{ text: "Еверест (Джомолунгма)", id: 1, isCorrect: true },
						{ text: "Монблан", id: 2, isCorrect: false },
						{ text: "Кіліманджаро", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "На якому континенті розташована Бразилія?",
					options: [
						{ text: "Африка", id: 0, isCorrect: false },
						{ text: "Північна Америка", id: 1, isCorrect: false },
						{ text: "Південна Америка", id: 2, isCorrect: true },
						{ text: "Європа", id: 3, isCorrect: false },
					],
				},
				{
					id: 11,
					text: "Столиця США:",
					options: [
						{ text: "Нью-Йорк", id: 0, isCorrect: false },
						{ text: "Лос-Анджелес", id: 1, isCorrect: false },
						{ text: "Вашингтон", id: 2, isCorrect: true },
						{ text: "Чикаго", id: 3, isCorrect: false },
					],
				},
			],
		},
		// --- ТЕСТ 7: Програмування (JS) ---
		{
			title: "Тест з JavaScript (Основи)",
			description: "Перевірка знань базового синтаксису JavaScript.",
			id: "6",
			questions: [
				{
					id: 0,
					text: "Як оголосити константу в JS?",
					options: [
						{ text: "var x = 1;", id: 0, isCorrect: false },
						{ text: "const x = 1;", id: 1, isCorrect: true },
						{ text: "let x = 1;", id: 2, isCorrect: false },
						{ text: "constant x = 1;", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "Який метод додає елемент в кінець масиву?",
					options: [
						{ text: "shift()", id: 0, isCorrect: false },
						{ text: "pop()", id: 1, isCorrect: false },
						{ text: "push()", id: 2, isCorrect: true },
						{ text: "unshift()", id: 3, isCorrect: false },
					],
				},
				{
					id: 2,
					text: "Який оператор використовується для строгої рівності (за типом і значенням)?",
					options: [
						{ text: "==", id: 0, isCorrect: false },
						{ text: "=", id: 1, isCorrect: false },
						{ text: "!=", id: 2, isCorrect: false },
						{ text: "===", id: 3, isCorrect: true },
					],
				},
				{
					id: 3,
					text: "Що поверне 'typeof 42'?",
					options: [
						{ text: "'string'", id: 0, isCorrect: false },
						{ text: "'number'", id: 1, isCorrect: true },
						{ text: "'object'", id: 2, isCorrect: false },
						{ text: "'undefined'", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "Як створити однорядковий коментар?",
					options: [
						{ text: "", id: 0, isCorrect: false },
						{ text: "//", id: 1, isCorrect: true },
						{ text: "/* */", id: 2, isCorrect: false },
						{ text: "**", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "Яке значення є хибним (falsy)?",
					options: [
						{ text: "1", id: 0, isCorrect: false },
						{ text: "'hello'", id: 1, isCorrect: false },
						{ text: "0", id: 2, isCorrect: true },
						{ text: "[]", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "Що робить метод 'console.log()'?",
					options: [
						{ text: "Виводить повідомлення в консоль", id: 0, isCorrect: true },
						{ text: "Показує спливаюче вікно", id: 1, isCorrect: false },
						{ text: "Перезавантажує сторінку", id: 2, isCorrect: false },
						{ text: "Нічого не робить", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "Який результат: '5' + 3?",
					options: [
						{ text: "8", id: 0, isCorrect: false },
						{ text: "'53'", id: 1, isCorrect: true },
						{ text: "2", id: 2, isCorrect: false },
						{ text: "NaN", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "Як викликати функцію 'myFunction'?",
					options: [
						{ text: "call myFunction", id: 0, isCorrect: false },
						{ text: "myFunction()", id: 1, isCorrect: true },
						{ text: "run myFunction", id: 2, isCorrect: false },
						{ text: "myFunction[]", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "Який цикл виконується хоча б один раз?",
					options: [
						{ text: "while", id: 0, isCorrect: false },
						{ text: "for", id: 1, isCorrect: false },
						{ text: "do...while", id: 2, isCorrect: true },
						{ text: "forEach", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "Що означає 'NaN'?",
					options: [
						{ text: "New and Null", id: 0, isCorrect: false },
						{ text: "Not a Number", id: 1, isCorrect: true },
						{ text: "Near a Number", id: 2, isCorrect: false },
						{ text: "No absolute Null", id: 3, isCorrect: false },
					],
				},
				{
					id: 11,
					text: "Як дізнатися довжину масиву 'arr'?",
					options: [
						{ text: "arr.size", id: 0, isCorrect: false },
						{ text: "arr.length", id: 1, isCorrect: true },
						{ text: "arr.count", id: 2, isCorrect: false },
						{ text: "arr.index", id: 3, isCorrect: false },
					],
				},
			],
		},
		// --- ТЕСТ 8: Біологія ---
		{
			title: "Тест з Біології (Клітина)",
			description: "Основні знання про будову клітини.",
			id: "7",
			questions: [
				{
					id: 0,
					text: "Який органел відповідає за фотосинтез?",
					options: [
						{ text: "Мітохондрії", id: 0, isCorrect: false },
						{ text: "Рибосоми", id: 1, isCorrect: false },
						{ text: "Хлоропласти", id: 2, isCorrect: true },
						{ text: "Ядро", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "Що називають 'енергетичною станцією' клітини?",
					options: [
						{ text: "Мітохондрії", id: 0, isCorrect: true },
						{ text: "Лізосоми", id: 1, isCorrect: false },
						{ text: "Вакуолі", id: 2, isCorrect: false },
						{ text: "Хлоропласти", id: 3, isCorrect: false },
					],
				},
				{
					id: 2,
					text: "Що зберігає генетичну інформацію?",
					options: [
						{ text: "АТФ", id: 0, isCorrect: false },
						{ text: "ДНК", id: 1, isCorrect: true },
						{ text: "Глюкоза", id: 2, isCorrect: false },
						{ text: "Крохмаль", id: 3, isCorrect: false },
					],
				},
				{
					id: 3,
					text: "Який орган людини перекачує кров?",
					options: [
						{ text: "Печінка", id: 0, isCorrect: false },
						{ text: "Легені", id: 1, isCorrect: false },
						{ text: "Серце", id: 2, isCorrect: true },
						{ text: "Шлунок", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "Найбільший орган людського тіла:",
					options: [
						{ text: "Мозок", id: 0, isCorrect: false },
						{ text: "Шкіра", id: 1, isCorrect: true },
						{ text: "Печінка", id: 2, isCorrect: false },
						{ text: "Кишківник", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "Скільки камер у серці людини?",
					options: [
						{ text: "2", id: 0, isCorrect: false },
						{ text: "3", id: 1, isCorrect: false },
						{ text: "4", id: 2, isCorrect: true },
						{ text: "5", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "Який газ ми вдихаємо для життя?",
					options: [
						{ text: "Азот", id: 0, isCorrect: false },
						{ text: "Вуглекислий газ", id: 1, isCorrect: false },
						{ text: "Кисень", id: 2, isCorrect: true },
						{ text: "Гелій", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "Що таке фотосинтез?",
					options: [
						{ text: "Дихання рослин", id: 0, isCorrect: false },
						{ text: "Утворення органічних речовин на світлі", id: 1, isCorrect: true },
						{ text: "Розмноження клітин", id: 2, isCorrect: false },
						{ text: "Вмирання листків", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "Яка функція еритроцитів?",
					options: [
						{ text: "Захист від вірусів", id: 0, isCorrect: false },
						{ text: "Транспорт кисню", id: 1, isCorrect: true },
						{ text: "Згортання крові", id: 2, isCorrect: false },
						{ text: "Виділення гормонів", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "Яка тварина є ссавцем?",
					options: [
						{ text: "Крокодил", id: 0, isCorrect: false },
						{ text: "Акула", id: 1, isCorrect: false },
						{ text: "Дельфін", id: 2, isCorrect: true },
						{ text: "Жаба", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "Як називається наука про гриби?",
					options: [
						{ text: "Ботаніка", id: 0, isCorrect: false },
						{ text: "Зоологія", id: 1, isCorrect: false },
						{ text: "Мікологія", id: 2, isCorrect: true },
						{ text: "Вірусологія", id: 3, isCorrect: false },
					],
				},
				{
					id: 11,
					text: "Скелет людини складається з:",
					options: [
						{ text: "М'язів", id: 0, isCorrect: false },
						{ text: "Кісток", id: 1, isCorrect: true },
						{ text: "Нервів", id: 2, isCorrect: false },
						{ text: "Судин", id: 3, isCorrect: false },
					],
				},
			],
		},
		// --- ТЕСТ 9: Література ---
		{
			title: "Тест з Української Літератури",
			description: "Твори та автори класичної української літератури.",
			id: "8",
			questions: [
				{
					id: 0,
					text: "Хто є автором поеми 'Катерина'?",
					options: [
						{ text: "Іван Франко", id: 0, isCorrect: false },
						{ text: "Тарас Шевченко", id: 1, isCorrect: true },
						{ text: "Леся Українка", id: 2, isCorrect: false },
						{ text: "Панас Мирний", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "Хто написав 'Лісову пісню'?",
					options: [
						{ text: "Ольга Кобилянська", id: 0, isCorrect: false },
						{ text: "Іван Нечуй-Левицький", id: 1, isCorrect: false },
						{ text: "Леся Українка", id: 2, isCorrect: true },
						{ text: "Тарас Шевченко", id: 3, isCorrect: false },
					],
				},
				{
					id: 2,
					text: "Автором 'Енеїди' є:",
					options: [
						{ text: "Григорій Сковорода", id: 0, isCorrect: false },
						{ text: "Іван Котляревський", id: 1, isCorrect: true },
						{ text: "Пантелеймон Куліш", id: 2, isCorrect: false },
						{ text: "Марко Вовчок", id: 3, isCorrect: false },
					],
				},
				{
					id: 3,
					text: "Хто написав історичну повість 'Захар Беркут'?",
					options: [
						{ text: "Іван Франко", id: 0, isCorrect: true },
						{ text: "Михайло Коцюбинський", id: 1, isCorrect: false },
						{ text: "Василь Стефаник", id: 2, isCorrect: false },
						{ text: "Олесь Гончар", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "Як звали головну героїню 'Наталка Полтавка'?",
					options: [
						{ text: "Маруся", id: 0, isCorrect: false },
						{ text: "Наталка", id: 1, isCorrect: true },
						{ text: "Галя", id: 2, isCorrect: false },
						{ text: "Мотря", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "Автор роману 'Хіба ревуть воли, як ясла повні?':",
					options: [
						{ text: "Панас Мирний", id: 0, isCorrect: true },
						{ text: "Іван Багряний", id: 1, isCorrect: false },
						{ text: "Микола Хвильовий", id: 2, isCorrect: false },
						{ text: "Валер'ян Підмогильний", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "Перший історичний роман в Україні 'Чорна рада' написав:",
					options: [
						{ text: "Пантелеймон Куліш", id: 0, isCorrect: true },
						{ text: "Тарас Шевченко", id: 1, isCorrect: false },
						{ text: "Іван Франко", id: 2, isCorrect: false },
						{ text: "Микола Гоголь", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "Кому належать слова 'Світ ловив мене, та не спіймав'?",
					options: [
						{ text: "Іван Мазепа", id: 0, isCorrect: false },
						{ text: "Григорій Сковорода", id: 1, isCorrect: true },
						{ text: "Богдан Хмельницький", id: 2, isCorrect: false },
						{ text: "Іван Вишенський", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "Новела 'Intermezzo' присвячена:",
					options: [
						{ text: "Кононівським полям", id: 0, isCorrect: true },
						{ text: "Дніпру", id: 1, isCorrect: false },
						{ text: "Революції", id: 2, isCorrect: false },
						{ text: "Коханню", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "Хто є автором 'Тіні забутих предків'?",
					options: [
						{ text: "Ольга Кобилянська", id: 0, isCorrect: false },
						{ text: "Михайло Коцюбинський", id: 1, isCorrect: true },
						{ text: "Лесь Курбас", id: 2, isCorrect: false },
						{ text: "Василь Стус", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "Прізвище головного героя 'Кайдашева сім'я':",
					options: [
						{ text: "Мазур", id: 0, isCorrect: false },
						{ text: "Кайдаш", id: 1, isCorrect: true },
						{ text: "Грицько", id: 2, isCorrect: false },
						{ text: "Чіпка", id: 3, isCorrect: false },
					],
				},
				{
					id: 11,
					text: "Представником 'розстріляного відродження' є:",
					options: [
						{ text: "Микола Хвильовий", id: 0, isCorrect: true },
						{ text: "Іван Котляревський", id: 1, isCorrect: false },
						{ text: "Григорій Квітка-Основ'яненко", id: 2, isCorrect: false },
						{ text: "Марко Вовчок", id: 3, isCorrect: false },
					],
				},
			],
		},
		// --- ТЕСТ 10: Фізика (Механіка) ---
		{
			title: "Тест з Фізики (Механіка)",
			description: "Базові закони Ньютона та кінематика.",
			id: "9",
			questions: [
				{
					id: 0,
					text: "Яка одиниця вимірювання сили в системі СІ?",
					options: [
						{ text: "Ватт (W)", id: 0, isCorrect: false },
						{ text: "Джоуль (J)", id: 1, isCorrect: false },
						{ text: "Ньютон (N)", id: 2, isCorrect: true },
						{ text: "Паскаль (Pa)", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "Формула другого закону Ньютона:",
					options: [
						{ text: "F = m * a", id: 0, isCorrect: true },
						{ text: "E = mc^2", id: 1, isCorrect: false },
						{ text: "P = F / A", id: 2, isCorrect: false },
						{ text: "A = F * s", id: 3, isCorrect: false },
					],
				},
				{
					id: 2,
					text: "Що вимірюється у метрах за секунду (м/с)?",
					options: [
						{ text: "Прискорення", id: 0, isCorrect: false },
						{ text: "Швидкість", id: 1, isCorrect: true },
						{ text: "Час", id: 2, isCorrect: false },
						{ text: "Маса", id: 3, isCorrect: false },
					],
				},
				{
					id: 3,
					text: "Прискорення вільного падіння (g) приблизно дорівнює:",
					options: [
						{ text: "5 м/с²", id: 0, isCorrect: false },
						{ text: "9.8 м/с²", id: 1, isCorrect: true },
						{ text: "15 м/с²", id: 2, isCorrect: false },
						{ text: "100 м/с²", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "Сила, що виникає при русі одного тіла по поверхні іншого:",
					options: [
						{ text: "Сила тяжіння", id: 0, isCorrect: false },
						{ text: "Сила тертя", id: 1, isCorrect: true },
						{ text: "Сила пружності", id: 2, isCorrect: false },
						{ text: "Сила Архімеда", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "Енергія руху тіла називається:",
					options: [
						{ text: "Потенціальна", id: 0, isCorrect: false },
						{ text: "Кінетична", id: 1, isCorrect: true },
						{ text: "Внутрішня", id: 2, isCorrect: false },
						{ text: "Ядерна", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "Формула шляху при рівномірному русі:",
					options: [
						{ text: "s = v * t", id: 0, isCorrect: true },
						{ text: "s = v / t", id: 1, isCorrect: false },
						{ text: "s = a * t", id: 2, isCorrect: false },
						{ text: "s = m * g", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "Прилад для вимірювання сили:",
					options: [
						{ text: "Термометр", id: 0, isCorrect: false },
						{ text: "Динамометр", id: 1, isCorrect: true },
						{ text: "Барометр", id: 2, isCorrect: false },
						{ text: "Спідометр", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "Що є мірою інертності тіла?",
					options: [
						{ text: "Об'єм", id: 0, isCorrect: false },
						{ text: "Швидкість", id: 1, isCorrect: false },
						{ text: "Маса", id: 2, isCorrect: true },
						{ text: "Густина", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "Робота (A) вимірюється в:",
					options: [
						{ text: "Ньютонах", id: 0, isCorrect: false },
						{ text: "Джоулях", id: 1, isCorrect: true },
						{ text: "Ватах", id: 2, isCorrect: false },
						{ text: "Кілограмах", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "Закон Архімеда пояснює:",
					options: [
						{ text: "Чому тіла падають", id: 0, isCorrect: false },
						{ text: "Чому тіла плавають", id: 1, isCorrect: true },
						{ text: "Як працює електрика", id: 2, isCorrect: false },
						{ text: "Швидкість звуку", id: 3, isCorrect: false },
					],
				},
				{
					id: 11,
					text: "Траєкторія руху кинутого під кутом до горизонту тіла:",
					options: [
						{ text: "Пряма", id: 0, isCorrect: false },
						{ text: "Парабола", id: 1, isCorrect: true },
						{ text: "Коло", id: 2, isCorrect: false },
						{ text: "Гіпербола", id: 3, isCorrect: false },
					],
				},
			],
		},
		// --- ТЕСТ 11: Кулінарія ---
		{
			title: "Тест: Основи Кулінарії",
			description: "Базові знання про приготування їжі.",
			id: "10",
			questions: [
				{
					id: 0,
					text: "Який інгредієнт є основним у борщі?",
					options: [
						{ text: "Капуста", id: 0, isCorrect: false },
						{ text: "Буряк", id: 1, isCorrect: true },
						{ text: "Морква", id: 2, isCorrect: false },
						{ text: "Картопля", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "Як називається процес приготування їжі на гарячій сковороді з невеликою кількістю жиру?",
					options: [
						{ text: "Варіння", id: 0, isCorrect: false },
						{ text: "Тушкування", id: 1, isCorrect: false },
						{ text: "Запікання", id: 2, isCorrect: false },
						{ text: "Смаження", id: 3, isCorrect: true },
					],
				},
				{
					id: 2,
					text: "Температура кипіння води при нормальному тиску:",
					options: [
						{ text: "80°C", id: 0, isCorrect: false },
						{ text: "90°C", id: 1, isCorrect: false },
						{ text: "100°C", id: 2, isCorrect: true },
						{ text: "120°C", id: 3, isCorrect: false },
					],
				},
				{
					id: 3,
					text: "Що означає 'al dente' для пасти?",
					options: [
						{ text: "Розварена", id: 0, isCorrect: false },
						{ text: "Злегка тверда всередині", id: 1, isCorrect: true },
						{ text: "Сира", id: 2, isCorrect: false },
						{ text: "Згоріла", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "Основний інгредієнт для випічки хліба:",
					options: [
						{ text: "Цукор", id: 0, isCorrect: false },
						{ text: "Борошно", id: 1, isCorrect: true },
						{ text: "Яйця", id: 2, isCorrect: false },
						{ text: "Молоко", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "З чого роблять тофу?",
					options: [
						{ text: "З молока", id: 0, isCorrect: false },
						{ text: "З сої", id: 1, isCorrect: true },
						{ text: "З м'яса", id: 2, isCorrect: false },
						{ text: "З рису", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "Що таке маринад?",
					options: [
						{ text: "Вид десерту", id: 0, isCorrect: false },
						{
							text: "Суміш для вимочування продуктів перед готуванням",
							id: 1,
							isCorrect: true,
						},
						{ text: "Спосіб нарізки овочів", id: 2, isCorrect: false },
						{ text: "Посуд для запікання", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "Який вітамін міститься у цитрусових у великій кількості?",
					options: [
						{ text: "Вітамін A", id: 0, isCorrect: false },
						{ text: "Вітамін C", id: 1, isCorrect: true },
						{ text: "Вітамін D", id: 2, isCorrect: false },
						{ text: "Вітамін B12", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "Як називається японська страва з рису та морепродуктів?",
					options: [
						{ text: "Піца", id: 0, isCorrect: false },
						{ text: "Суші", id: 1, isCorrect: true },
						{ text: "Тако", id: 2, isCorrect: false },
						{ text: "Бургер", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "Що додають у тісто, щоб воно піднялося?",
					options: [
						{ text: "Сіль", id: 0, isCorrect: false },
						{ text: "Дріжджі або розпушувач", id: 1, isCorrect: true },
						{ text: "Олію", id: 2, isCorrect: false },
						{ text: "Перець", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "Який продукт є головним джерелом білка?",
					options: [
						{ text: "Яблуко", id: 0, isCorrect: false },
						{ text: "Курка", id: 1, isCorrect: true },
						{ text: "Цукор", id: 2, isCorrect: false },
						{ text: "Огірок", id: 3, isCorrect: false },
					],
				},
				{
					id: 11,
					text: "Який прибор використовують для збивання яєць?",
					options: [
						{ text: "Ніж", id: 0, isCorrect: false },
						{ text: "Вінчик", id: 1, isCorrect: true },
						{ text: "Скалка", id: 2, isCorrect: false },
						{ text: "Терка", id: 3, isCorrect: false },
					],
				},
			],
		},
		// --- ТЕСТ 12: Комп'ютерні мережі ---
		{
			title: "Тест з Мереж (Основи)",
			description: "Перевірка знань про моделі OSI та протоколи.",
			id: "11",
			questions: [
				{
					id: 0,
					text: "Скільки рівнів має модель OSI?",
					options: [
						{ text: "5", id: 0, isCorrect: false },
						{ text: "7", id: 1, isCorrect: true },
						{ text: "4", id: 2, isCorrect: false },
						{ text: "8", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "Який протокол відповідає за передачу веб-сторінок?",
					options: [
						{ text: "FTP", id: 0, isCorrect: false },
						{ text: "SMTP", id: 1, isCorrect: false },
						{ text: "HTTP", id: 2, isCorrect: true },
						{ text: "TCP", id: 3, isCorrect: false },
					],
				},
				{
					id: 2,
					text: "Що таке IP-адреса?",
					options: [
						{ text: "Фізична адреса пристрою", id: 0, isCorrect: false },
						{
							text: "Унікальний числовий ідентифікатор у мережі",
							id: 1,
							isCorrect: true,
						},
						{ text: "Пароль від Wi-Fi", id: 2, isCorrect: false },
						{ text: "Назва сайту", id: 3, isCorrect: false },
					],
				},
				{
					id: 3,
					text: "Що робить DNS?",
					options: [
						{ text: "Перетворює доменні імена в IP-адреси", id: 0, isCorrect: true },
						{ text: "Захищає від вірусів", id: 1, isCorrect: false },
						{ text: "Прискорює інтернет", id: 2, isCorrect: false },
						{ text: "Зберігає файли", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "Що означає LAN?",
					options: [
						{ text: "Local Area Network", id: 0, isCorrect: true },
						{ text: "Large Area Network", id: 1, isCorrect: false },
						{ text: "Long Apple Name", id: 2, isCorrect: false },
						{ text: "Legal Access Number", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "Який пристрій з'єднує різні мережі (наприклад, вашу домашню і інтернет)?",
					options: [
						{ text: "Свіч (Switch)", id: 0, isCorrect: false },
						{ text: "Маршрутизатор (Router)", id: 1, isCorrect: true },
						{ text: "Монітор", id: 2, isCorrect: false },
						{ text: "Принтер", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "Команда для перевірки з'єднання з вузлом мережі:",
					options: [
						{ text: "pong", id: 0, isCorrect: false },
						{ text: "ping", id: 1, isCorrect: true },
						{ text: "connect", id: 2, isCorrect: false },
						{ text: "check", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "Який порт за замовчуванням використовує HTTP?",
					options: [
						{ text: "21", id: 0, isCorrect: false },
						{ text: "443", id: 1, isCorrect: false },
						{ text: "80", id: 2, isCorrect: true },
						{ text: "22", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "Що таке Wi-Fi?",
					options: [
						{ text: "Дротовий інтернет", id: 0, isCorrect: false },
						{ text: "Бездротова локальна мережа", id: 1, isCorrect: true },
						{ text: "Супутниковий зв'язок", id: 2, isCorrect: false },
						{ text: "Мобільний інтернет 4G", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "Який протокол використовується для надсилання електронної пошти?",
					options: [
						{ text: "POP3", id: 0, isCorrect: false },
						{ text: "IMAP", id: 1, isCorrect: false },
						{ text: "SMTP", id: 2, isCorrect: true },
						{ text: "FTP", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "Що таке VPN?",
					options: [
						{ text: "Very Personal Network", id: 0, isCorrect: false },
						{ text: "Virtual Private Network", id: 1, isCorrect: true },
						{ text: "Visual Protocol Number", id: 2, isCorrect: false },
						{ text: "Virus Protection Name", id: 3, isCorrect: false },
					],
				},
				{
					id: 11,
					text: "Унікальна фізична адреса мережевої карти називається:",
					options: [
						{ text: "IP-адреса", id: 0, isCorrect: false },
						{ text: "MAC-адреса", id: 1, isCorrect: true },
						{ text: "URL", id: 2, isCorrect: false },
						{ text: "DNS", id: 3, isCorrect: false },
					],
				},
			],
		},
		// --- ТЕСТ 13: Логіка ---
		{
			title: "Тест на Логіку",
			description: "Перевірка логічного мислення.",
			id: "12",
			questions: [
				{
					id: 0,
					text: "Продовжіть послідовність: 2, 4, 8, 16, ___",
					options: [
						{ text: "24", id: 0, isCorrect: false },
						{ text: "32", id: 1, isCorrect: true },
						{ text: "20", id: 2, isCorrect: false },
						{ text: "64", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "Якщо всі А є Б, а деякі Б є В, чи обов'язково деякі А є В?",
					options: [
						{ text: "Так, завжди", id: 0, isCorrect: false },
						{ text: "Ні, не обов'язково", id: 1, isCorrect: true },
						{ text: "Тільки якщо А = Б", id: 2, isCorrect: false },
						{ text: "Тільки якщо Б = В", id: 3, isCorrect: false },
					],
				},
				{
					id: 2,
					text: "Яке число зайве: 3, 5, 7, 9, 11?",
					options: [
						{ text: "3", id: 0, isCorrect: false },
						{ text: "9", id: 1, isCorrect: true },
						{ text: "7", id: 2, isCorrect: false },
						{ text: "11", id: 3, isCorrect: false },
					],
				},
				{
					id: 3,
					text: "У батька Мері є 5 дочок: Чача, Чече, Чічі, Чочо. Як звати п'яту?",
					options: [
						{ text: "Чучу", id: 0, isCorrect: false },
						{ text: "Мері", id: 1, isCorrect: true },
						{ text: "Чача", id: 2, isCorrect: false },
						{ text: "Анна", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "Що важче: кілограм заліза чи кілограм вати?",
					options: [
						{ text: "Залізо", id: 0, isCorrect: false },
						{ text: "Вата", id: 1, isCorrect: false },
						{ text: "Вони важать однаково", id: 2, isCorrect: true },
						{ text: "Залежить від погоди", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "Лікар дав вам 3 таблетки і сказав приймати кожну через пів години. За скільки часу ви приймете усі?",
					options: [
						{ text: "1.5 години", id: 0, isCorrect: false },
						{ text: "1 година", id: 1, isCorrect: true },
						{ text: "2 години", id: 2, isCorrect: false },
						{ text: "3 години", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "Палець - Рука, Листок - ... ?",
					options: [
						{ text: "Дерево", id: 0, isCorrect: true },
						{ text: "Квітка", id: 1, isCorrect: false },
						{ text: "Земля", id: 2, isCorrect: false },
						{ text: "Зелений", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "У кімнаті горіло 7 свічок. 2 погасли. Скільки свічок залишилось?",
					options: [
						{ text: "5", id: 0, isCorrect: false },
						{ text: "2 (інші згоріли)", id: 1, isCorrect: true },
						{ text: "7", id: 2, isCorrect: false },
						{ text: "0", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "Продовжіть: 1, 1, 2, 3, 5, 8, ...",
					options: [
						{ text: "10", id: 0, isCorrect: false },
						{ text: "13", id: 1, isCorrect: true },
						{ text: "12", id: 2, isCorrect: false },
						{ text: "15", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "Брат мого батька - це мій:",
					options: [
						{ text: "Дід", id: 0, isCorrect: false },
						{ text: "Брат", id: 1, isCorrect: false },
						{ text: "Дядько", id: 2, isCorrect: true },
						{ text: "Кузен", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "Скільки місяців у році мають 28 днів?",
					options: [
						{ text: "Один (Лютий)", id: 0, isCorrect: false },
						{ text: "Усі 12", id: 1, isCorrect: true },
						{ text: "Жодного", id: 2, isCorrect: false },
						{ text: "Шість", id: 3, isCorrect: false },
					],
				},
				{
					id: 11,
					text: "Ви біжите марафон і обганяєте бігуна, що біжить другим. Яким ви біжите?",
					options: [
						{ text: "Першим", id: 0, isCorrect: false },
						{ text: "Другим", id: 1, isCorrect: true },
						{ text: "Третім", id: 2, isCorrect: false },
						{ text: "Передостаннім", id: 3, isCorrect: false },
					],
				},
			],
		},
		// --- ТЕСТ 14: Мистецтво ---
		{
			title: "Тест з Мистецтва",
			description: "Знання відомих картин та художників.",
			id: "13",
			questions: [
				{
					id: 0,
					text: "Хто намалював картину 'Мона Ліза'?",
					options: [
						{ text: "Вінсент Ван Гог", id: 0, isCorrect: false },
						{ text: "Леонардо да Вінчі", id: 1, isCorrect: true },
						{ text: "Пабло Пікассо", id: 2, isCorrect: false },
						{ text: "Мікеланджело", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "В якому стилі творив Сальвадор Далі?",
					options: [
						{ text: "Імпресіонізм", id: 0, isCorrect: false },
						{ text: "Кубізм", id: 1, isCorrect: false },
						{ text: "Сюрреалізм", id: 2, isCorrect: true },
						{ text: "Реалізм", id: 3, isCorrect: false },
					],
				},
				{
					id: 2,
					text: "Хто автор картини 'Зоряна ніч'?",
					options: [
						{ text: "Клод Моне", id: 0, isCorrect: false },
						{ text: "Вінсент Ван Гог", id: 1, isCorrect: true },
						{ text: "Рембрандт", id: 2, isCorrect: false },
						{ text: "Рафаель", id: 3, isCorrect: false },
					],
				},
				{
					id: 3,
					text: "Які кольори є основними (первинними)?",
					options: [
						{ text: "Зелений, Оранжевий, Фіолетовий", id: 0, isCorrect: false },
						{ text: "Червоний, Жовтий, Синій", id: 1, isCorrect: true },
						{ text: "Білий, Чорний, Сірий", id: 2, isCorrect: false },
						{ text: "Червоний, Зелений, Синій", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "Скульптор статуї 'Давид':",
					options: [
						{ text: "Мікеланджело", id: 0, isCorrect: true },
						{ text: "Донателло", id: 1, isCorrect: false },
						{ text: "Берніні", id: 2, isCorrect: false },
						{ text: "Роден", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "Де знаходиться Лувр?",
					options: [
						{ text: "Лондон", id: 0, isCorrect: false },
						{ text: "Париж", id: 1, isCorrect: true },
						{ text: "Рим", id: 2, isCorrect: false },
						{ text: "Нью-Йорк", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "Хто відрізав собі частину вуха?",
					options: [
						{ text: "Пікассо", id: 0, isCorrect: false },
						{ text: "Ван Гог", id: 1, isCorrect: true },
						{ text: "Гойя", id: 2, isCorrect: false },
						{ text: "Малевич", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "Автор картини 'Чорний квадрат':",
					options: [
						{ text: "Казимир Малевич", id: 0, isCorrect: true },
						{ text: "Василь Кандинський", id: 1, isCorrect: false },
						{ text: "Енді Воргол", id: 2, isCorrect: false },
						{ text: "Густав Клімт", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "Що означає слово 'Ренесанс'?",
					options: [
						{ text: "Занепад", id: 0, isCorrect: false },
						{ text: "Відродження", id: 1, isCorrect: true },
						{ text: "Новизна", id: 2, isCorrect: false },
						{ text: "Темрява", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "Хто розписав стелю Сікстинської капели?",
					options: [
						{ text: "Леонардо да Вінчі", id: 0, isCorrect: false },
						{ text: "Мікеланджело", id: 1, isCorrect: true },
						{ text: "Боттічеллі", id: 2, isCorrect: false },
						{ text: "Тиціан", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "Жанр живопису, що зображує неживі предмети (фрукти, квіти):",
					options: [
						{ text: "Пейзаж", id: 0, isCorrect: false },
						{ text: "Портрет", id: 1, isCorrect: false },
						{ text: "Натюрморт", id: 2, isCorrect: true },
						{ text: "Марина", id: 3, isCorrect: false },
					],
				},
				{
					id: 11,
					text: "Українська народна художниця, представниця 'наївного мистецтва':",
					options: [
						{ text: "Катерина Білокур", id: 0, isCorrect: false },
						{ text: "Марія Примаченко", id: 1, isCorrect: true },
						{ text: "Тетяна Яблонська", id: 2, isCorrect: false },
						{ text: "Алла Горська", id: 3, isCorrect: false },
					],
				},
			],
		},
		// --- ТЕСТ 15: Фінанси ---
		{
			title: "Тест з Особистих Фінансів",
			description: "Базові поняття про гроші та інвестиції.",
			id: "14",
			questions: [
				{
					id: 0,
					text: "Що таке 'інфляція'?",
					options: [
						{ text: "Зростання вартості грошей", id: 0, isCorrect: false },
						{
							text: "Зниження купівельної спроможності грошей",
							id: 1,
							isCorrect: true,
						},
						{ text: "Фіксований обмінний курс", id: 2, isCorrect: false },
						{ text: "Накопичення багатства", id: 3, isCorrect: false },
					],
				},
				{
					id: 1,
					text: "Що таке 'диверсифікація' у інвестиціях?",
					options: [
						{ text: "Вкладення всіх грошей в один актив", id: 0, isCorrect: false },
						{
							text: "Розподіл інвестицій між різними активами для зниження ризику",
							id: 1,
							isCorrect: true,
						},
						{
							text: "Швидкий продаж активів для отримання прибутку",
							id: 2,
							isCorrect: false,
						},
						{ text: "Інвестування тільки в іноземну валюту", id: 3, isCorrect: false },
					],
				},
				{
					id: 2,
					text: "Що таке 'актив'?",
					options: [
						{ text: "Те, що забирає гроші з кишені", id: 0, isCorrect: false },
						{ text: "Те, що приносить гроші або має вартість", id: 1, isCorrect: true },
						{ text: "Борг перед банком", id: 2, isCorrect: false },
						{ text: "Щомісячні витрати", id: 3, isCorrect: false },
					],
				},
				{
					id: 3,
					text: "Що таке 'пасив'?",
					options: [
						{ text: "Прибуток", id: 0, isCorrect: false },
						{
							text: "Фінансові зобов'язання або те, що забирає гроші",
							id: 1,
							isCorrect: true,
						},
						{ text: "Акції", id: 2, isCorrect: false },
						{ text: "Депозит", id: 3, isCorrect: false },
					],
				},
				{
					id: 4,
					text: "Яка функція депозиту?",
					options: [
						{ text: "Втратити гроші", id: 0, isCorrect: false },
						{ text: "Зберегти гроші та отримати відсотки", id: 1, isCorrect: true },
						{ text: "Купити товари", id: 2, isCorrect: false },
						{ text: "Взяти гроші в борг", id: 3, isCorrect: false },
					],
				},
				{
					id: 5,
					text: "Що таке 'фінансова подушка безпеки'?",
					options: [
						{ text: "Гроші на відпустку", id: 0, isCorrect: false },
						{
							text: "Запас грошей на випадок втрати доходу (на 3-6 місяців)",
							id: 1,
							isCorrect: true,
						},
						{ text: "Страхування авто", id: 2, isCorrect: false },
						{ text: "Кредитна картка", id: 3, isCorrect: false },
					],
				},
				{
					id: 6,
					text: "Що таке 'акція' компанії?",
					options: [
						{ text: "Боргова розписка", id: 0, isCorrect: false },
						{ text: "Частка у власності компанії", id: 1, isCorrect: true },
						{ text: "Знижка на товари", id: 2, isCorrect: false },
						{ text: "Зарплата директора", id: 3, isCorrect: false },
					],
				},
				{
					id: 7,
					text: "Що таке 'кредит'?",
					options: [
						{ text: "Подарунок від банку", id: 0, isCorrect: false },
						{
							text: "Позика грошей з обов'язком повернення з відсотками",
							id: 1,
							isCorrect: true,
						},
						{ text: "Власні заощадження", id: 2, isCorrect: false },
						{ text: "Виграш в лотерею", id: 3, isCorrect: false },
					],
				},
				{
					id: 8,
					text: "Що означає 'ведмежий ринок'?",
					options: [
						{ text: "Ринок зростає", id: 0, isCorrect: false },
						{ text: "Ринок падає", id: 1, isCorrect: true },
						{ text: "Ринок стабільний", id: 2, isCorrect: false },
						{ text: "Ринок тварин", id: 3, isCorrect: false },
					],
				},
				{
					id: 9,
					text: "Що таке 'чистий прибуток'?",
					options: [
						{ text: "Усі зароблені гроші", id: 0, isCorrect: false },
						{ text: "Доходи мінус витрати і податки", id: 1, isCorrect: true },
						{ text: "Гроші до сплати податків", id: 2, isCorrect: false },
						{ text: "Зарплата персоналу", id: 3, isCorrect: false },
					],
				},
				{
					id: 10,
					text: "Яка валюта є світовою резервною?",
					options: [
						{ text: "Гривня", id: 0, isCorrect: false },
						{ text: "Долар США", id: 1, isCorrect: true },
						{ text: "Рупія", id: 2, isCorrect: false },
						{ text: "Песо", id: 3, isCorrect: false },
					],
				},
				{
					id: 11,
					text: "Що таке 'кешбек'?",
					options: [
						{ text: "Комісія банку", id: 0, isCorrect: false },
						{ text: "Повернення частини витрачених коштів", id: 1, isCorrect: true },
						{ text: "Податок на покупку", id: 2, isCorrect: false },
						{ text: "Оплата готівкою", id: 3, isCorrect: false },
					],
				},
			],
		},
	],
	// --- Секція результатів ---
	results: [],
};
