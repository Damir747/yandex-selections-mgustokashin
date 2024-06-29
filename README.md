https://coderun.yandex.ru/selections/mgustokashin

1. Скорая помощь
Не решалась
Средняя

Бригада скорой помощи выехала по вызову в один из отделённых районов. К сожалению, когда диспетчер получил вызов, он успел записать только адрес дома и номер квартиры K1K1​, а затем связь прервалась. Однако он вспомнил, что по этому же адресу дома некоторое время назад скорая помощь выезжала в квартиру K2K2​, которая расположена в подъезда P2P2​ на этаже N2N2​. Известно, что в доме MM этажей, а количество квартир на каждой лестничной площадке одинаково. Напишите программу, которая вычисляет номер подъезда P1P1​ и номер этажа N1N1​ квартиры K1K1​.
Формат ввода

Во входном файле записаны пять положительных целых чисел K1K1​, MM, K2K2​, P2P2​, N2N2​. Все числа не превосходят 106106.
Формат вывода

Выведите два числа P1P1​ и N1N1​. Если входные данные не позволяют однозначно определить P1P1​ или N1N1​, вместо соответствующего числа напечатайте 00. Если входные данные противоречивы, напечатайте два числа –1–1 (минус один).
Ограничения

Ограничение времени

    1 с

Ограничение памяти

    64 МБ

Пример 1
Ввод

89 20 41 1 11

Вывод

2 3

Пример 2
Ввод

11 1 1 1 1

Вывод

0 1

Пример 3
Ввод

3 2 2 2 1

Вывод

-1 -1

2. Пробежки по Манхэттену
Не решалась
Средняя

Дороги Нью-Манхэттена устроены следующим образом. С юга на север через каждые сто метров проходит авеню, с запада на восток через каждые сто метров проходит улица. Авеню и улицы нумеруются целыми числами. Меньшие номера соответствуют западным авеню и южным улицам. Таким образом, можно построить прямоугольную систему координат так, чтобы точка (x, y) лежала на пересечении x-ой авеню и y-ой улицы. Легко заметить, что для того, чтобы в Нью-Манхэттене дойти от точки (x1,y1x1​,y1​) до точки (x2,y2x2​,y2​) нужно пройти ∣x2−x1∣+∣y2−y1∣∣x2​−x1​∣+∣y2​−y1​∣ кварталов. Эта величина называется манхэттенским расстоянием между точками (x1,y1x1​,y1​) и (x2,y2x2​,y2​).

Миша живет в Нью-Манхэттене и каждое утро делает пробежку по городу. Он выбегает из своего дома, который находится в точке (0, 0) и бежит по случайному маршруту. Каждую минуту Миша либо остается на том же перекрестке, что и минуту назад, или перемещается на один квартал в любом направлении. Чтобы не заблудиться Миша берет с собой навигатор, который каждые t минут говорит Мише, в какой точке он находится. К сожалению, навигатор показывает не точное положение Миши, он может показать любую из точек, манхэттенское расстояние от которых до Миши не превышает d.

Через t×nt×n минут от начала пробежки, получив n-е сообщение от навигатора, Миша решил, что пора бежать домой. Для этого он хочет понять, в каких точках он может находиться. Помогите Мише сделать это.
Формат ввода

Первая строка входного файла содержит числа t, d и n (1≤t≤1001≤t≤100, 1≤d≤1001≤d≤100, 1≤n≤1001≤n≤100).

Далее n строк описывают данные, полученные от навигатора. Строка номер i содержит числа xixi​ и yiyi​ — данные, полученные от навигатора через titi​ минут от начала пробежки.
Формат вывода

В первой строке выходного файла выведите число m — число точек, в которых может находиться Миша. Далее выведите m пар чисел — координаты точек. Точки можно вывести в произвольном порядке.

Гарантируется, что навигатор исправен и что существует по крайней мере одна точка, в которой может находиться Миша.
Ограничения

Ограничение времени

    2 с

Ограничение памяти

    64 МБ

Пример 1
Ввод

2 1 5
0 1
-2 1
-2 3
0 3
2 5

Вывод

2
1 5
2 4

Пример 2
Ввод

1 1 1
0 0

Вывод

5
-1 0
0 -1
0 0
0 1
1 0

Пример 3
Ввод

1 10 1
0 0

Вывод

5
-1 0
0 -1
0 0
0 1
1 0

3. Расшифровка письменности Майя
Не решалась
Средняя

Расшифровка письменности Майя оказалась более сложной задачей, чем предполагалось ранними исследованиями. На протяжении более чем двух сотен лет удалось узнать не так уж много. Основные результаты были получены за последние 30 лет.

Письменность Майя основывается на маленьких рисунках, известных как значки, которые обозначают звуки. Слова языка Майя обычно записываются с помощью этих значков, которые располагаются рядом друг с другом в некотором порядке.

Одна из проблем расшифровки письменности Майя заключается в определении этого порядка. Рисуя значки некоторого слова, писатели Майя иногда выбирали позиции для значков, исходя скорее из эстетических взглядов, а не определенных правил. Это привело к тому, что, хотя звуки для многих значков известны, археологи не всегда уверены, как должно произноситься записанное слово.

Археологи ищут некоторое слово W. Они знают значки для него, но не знают все возможные способы их расположения. Поскольку они знают, что Вы приедете на IOI ’06, они просят Вас о помощи. Они дадут Вам g значков, составляющих слово W, и последовательность S всех значков в надписи, которую они изучают, в порядке их появления. Помогите им, подсчитав количество возможных появлений слова W.

Задание Напишите программу, которая по значкам слова W и по последовательности S значков надписи подсчитывает количество всех возможных вхождений слова W в S, то есть количество всех различных позиций идущих подряд g значков в последовательности S, которые являются какой-либо перестановкой значков слова W.
Формат ввода

1 ≤≤ g ≤≤ 3 000, g – количество значков в слове W

g ≤≤ |S| ≤≤ 3 000 000 где |S| – количество значков в последовательности S

На вход программы поступают данные в следующем формате:

СТРОКА 1: Содержит два числа, разделенных пробелом – g и |S|.

СТРОКА 2: Содержит g последовательных символов, с помощью которых записывается слово W . Допустимы символы: ‘a’-‘z’ и ‘A’-‘Z’; большие и маленькие буквы считаются различными.

СТРОКА 3: Содержит |S| последовательных символов, которые представляют значки в надписи. Допустимы символы: ‘a’-‘z’ и ‘A’-‘Z’; большие и маленькие буквы считаются различными.
Формат вывода

Единственная строка выходных данных программы должна содержать количество возможных вхождений слова W в S.
Ограничения

Ограничение времени

    2 с

Ограничение памяти

    64 МБ

Пример 1
Ввод

4 11
cAda
AbrAcadAbRa

Вывод

2

4. Гоблины и шаманы
Не решалась
Средняя

Гоблины Мглистых гор очень любях ходить к своим шаманам. Так как гоблинов много, к шаманам часто образуются очень длинные очереди. А поскольку много гоблинов в одном месте быстро образуют шумную толпу, которая мешает шаманам проводить сложные медицинские манипуляции, последние решили установить некоторые правила касательно порядка в очереди.

Обычные гоблины при посещении шаманов должны вставать в конец очереди. Привилегированные же гоблины, знающие особый пароль, встают ровно в её середину, причем при нечётной длине очереди они встают сразу за центром.

Так как гоблины также широко известны своим непочтительным отношением ко всяческим правилам и законам, шаманы попросили вас написать программу, которая бы отслеживала порядок гоблинов в очереди.
Формат ввода

В первой строке входных данный записано число N (1≤N≤1051≤N≤105) — количество запросов к программе. Следующие N строк содержат описание запросов в формате:

''+ i'' — гоблин с номером i (1≤i≤N1≤i≤N) встает в конец очереди.

''* i'' — привилегированный гоблин с номером i встает в середину очереди.

''-'' — первый гоблин из очереди уходит к шаманам. Гарантируется, что на момент такого запроса очередь не пуста.
Формат вывода

Для каждого запроса типа ''-'' программа должна вывести номер гоблина, который должен зайти к шаманам.
Ограничения

Ограничение времени

    1 с

Ограничение памяти

    256 МБ

Пример 1
Ввод

7
+ 1
+ 2
-
+ 3
+ 4
-
-

Вывод

1
2
3

5. Автобусы
Не решалась
Средняя

Новый Президент Тридевятой республики начал свою деятельность с полной ревизии системы общественного транспорта страны. В результате на основе социологических опросов населения было составлено идеальное ежедневное расписание движения междугородних автобусов, утверждённое Парламентом республики.

Более того, было решено заменить весь автобусный парк одинаковыми новыми, очень дорогими, но гораздо более надёжными, красивыми и удобными машинами.

Автобусная сеть страны охватывает N городов, занумерованных целыми числами от 1 до N.

Идеальное расписание содержит M ежедневных рейсов, i-й рейс начинается в городе FiFi​ в момент времени XiXi​ и заканчивается в некотором другом городе GiGi​ в момент времени YiYi​. Продолжительность каждого рейса ненулевая и строго меньше 24 часов. Рейс i выполняется одним из автобусов, находящихся в момент времени XiXi​ в городе FiFi​.

Новые автобусы не требуют ремонта и могут работать круглосуточно, поэтому автобус, прибывший в некоторый момент времени в некоторый город, всегда готов в тот же самый момент времени или позже отправиться в путь для обслуживания любого другого рейса из данного города. Автобус может выехать из города, только выполняя какой-либо рейс из расписания.

Предполагается, что расписание будет действовать неограниченное время, поэтому может оказаться так, что его невозможно обслужить никаким конечным числом автобусов.

Определите наименьшее количество новых автобусов, достаточное для обеспечения движения по расписанию в течение неограниченного периода времени.
Формат ввода

В первой строке задаются целые числа N и М (1 ≤≤ N, M ≤≤ 100 000) — количество городов и рейсов автобусов соответственно.

В каждой из следующих M строк содержится описание рейса автобуса: номер города отправления FiFi​, время отправления XiXi​, номер города назначения GiGi​ (FiFi​ ≠ GiGi​), время прибытия YiYi​, отделенные друг от друга одним пробелом. Время прибытия и отправления задается в формате HH:MM, где HH — часы от 00 до 23, MM — минуты от 00 до 59.
Формат вывода

Выведите одно число — минимально необходимое количество автобусов. Если расписание невозможно обслуживать в течение неограниченного периода времени конечным числом автобусов, выведите число -1.
Ограничения

Ограничение времени

    2 с

Ограничение памяти

    64 МБ

Пример 1
Ввод

2 2
2 20:00 1 10:00
1 08:00 2 21:00

Вывод

3

Пример 2
Ввод

2 2
1 09:00 2 20:00
2 20:00 1 09:00

Вывод

1

Пример 3
Ввод

3 4
3 03:52 1 08:50
1 18:28 3 21:53
2 03:58 3 09:00
3 14:59 2 21:13

Вывод

2

6. Амбициозная улитка
В процессе
Лёгкая

Домашний питомец мальчика Васи −− улитка Петя. Петя обитает на бесконечном в обе стороны вертикальном столбе, который для удобства можно представить как числовую прямую. Изначально Петя находится в точке 00.

Вася кормит Петю ягодами. У него есть nn ягод, каждая в единственном экземпляре. Вася знает, что если утром он даст Пете ягоду с номером ii, то поев и набравшись сил, за остаток дня Петя поднимется на aiai​ единиц вверх по столбу, но при этом за ночь, потяжелев, съедет на bibi​ единиц вниз. Параметры различных ягод могут совпадать.

Пете стало интересно, а как оно там, наверху, и Вася взялся ему в этом помочь. Ближайшие nn дней он будет кормить Петю ягодами из своего запаса таким образом, чтобы максимальная высота, на которой побывал Петя за эти nn дней была максимальной. К сожалению, Вася не умеет программировать, поэтому он попросил вас о помощи. Найдите, максимальную высоту, на которой Петя сможет побывать за эти nn дней и в каком порядке Вася должен давать Пете ягоды, чтобы Петя смог её достичь!
Формат ввода

В первой строке входных данных дано число nn (1≤n≤5⋅1051≤n≤5⋅105) −− количество ягод у Васи. В последующих nn строках описываются параметры каждой ягоды. В i+1i+1 строке дано два числа aiai​ и bibi​ (0≤ai,bi≤1090≤ai​,bi​≤109) −− то, насколько поднимется улитка за день после того, как съест ii ягоду и насколько опуститься за ночь.
Формат вывода

В первой строке выходных данных выведите единственное число −− максимальную высоту, которую сможет достичь Петя, если Вася будет его кормить оптимальным образом. В следующей строке выведите nn различных целых чисел от 11 до nn −− порядок, в котором Вася должен кормить Петю (ii число в строке соответствует номеру ягоды, которую Вася должен дать Пете в ii день чтобы Петя смог достичь максимальной высоты).
Примечание

Во втором примере изначально улитка находится на высоте 00. Пусть сначала Петя накормит её второй ягодой, а затем первой. После того как она съест вторую ягоду, за день она поднимется на 77 (и окажется на высоте 77), а за ночь опустится на 44 (и окажется на высоте 33). После того как она съест первую ягоду, за день она поднимется на 77 (и окажется на высоте 1010), а за ночь опустится на 66 (и окажется на высоте 44).

Таким образом, максимальная высота, на которой побывает улитка при данном порядке кормления, равна 1010. Нетрудно видеть, что если Петя накормит улитку сначала первой ягодой, а затем второй, то максимальная высота, на которой побывает улитка, будет меньше.
Ограничения

Ограничение времени

    5 с

Ограничение памяти

    256 МБ

Пример 1
Ввод

3
1 5
8 2
4 4

Вывод

10
2 3 1 

Пример 2
Ввод

2
7 6
7 4

Вывод

10
2 1 

9. Разрушить казарму
Не решалась
Средняя

Вы играете в интересную стратегию. У вашего соперника остались всего одна казарма −− здание, в котором постоянно появляются новые солдаты. Перед атакой у вас есть xx солдат. За один раунд каждый солдат может убить одного из солдат противника или нанести 11 очко урона казарме (вычесть единицу здоровья у казармы). Изначально у вашего оппонента нет солдат. Тем не менее его казарма имеет yy единиц здоровья и производит pp солдат за раунд.

Ход одного раунда:

    Каждый солдат из вашей армии либо убивает одного из солдат вашего противника, либо наносит 11 очко урона казарме. Каждый солдат может выбрать своё действие. Когда казарма теряет все свои единицы здоровья, она разрушается.
    Ваш противник атакует. Он убьет kk ваших солдат, где kk −− количество оставшихся у противника солдат.
    Если казармы еще не разрушены, ваш противник производит pp новых солдат.

Ваша задача −− разрушить казарму и убить всех солдат противника. Если это возможно, посчитайте минимальное количество раундов, которое вам нужно для этого. В противном случае выведите −1−1.
Формат ввода

На вход подаётся три целых числа xx, yy, pp (1≤x,y,p≤50001≤x,y,p≤5000) −− количество ваших солдат на старте игры, количество очков здоровья казармы и количество производимых за раунд казармой солдат, соответственно. Каждое число расположено в новой строке.
Формат вывода

Если возможно убить всех вражеских солдат и разрушить казарму, выведите минимальное количество раундов, необходимых для этого. В противном случае выведите −1−1.
Примечание

В первом примере в первом раунде сначала все ваши солдату атакуют казарму, после этого не происходит ничего, потому что у врага нет солдат, затем у врага появляется 1515 солдат. Во втором раунде один ваш солдат добивает казарму, остальные 99 солдат убивают 99 солдат врага. Оставшиеся 66 солдат врага убивают 66 ваших солдат, но армия врага не пополняется, поскольку казарма разрушена. В третьем раунде сначала вы убиваете четверых солдат врага, затем враг двоих ваших солдат. В последнем, четвертом, раунде вы добиваете двух оставшихся солдат врага.
Ограничения

Ограничение времени

    1 с

Ограничение памяти

    256 МБ

Пример 1
Ввод

10
11
15

Вывод

4

Пример 2
Ввод

1
2
1

Вывод

-1

Пример 3
Ввод

1
1
1

Вывод

1

Пример 4
Ввод

25
200
10

Вывод

13

10. Упаковка эчпочмаков
Не решалась
Сложная

Андрей работает мыловаром и живет в общежитии со своим соседом Азатом. Бабушка прислала Азату коробку своих фирменных эчпочмаков. Эчпочмаки пахли так вкусно, что Андрей не выдержал и съел некоторые из них.

Коробка с эчпочмаками −− это прямоугольник размером N×MN×M. Фирменные эчпочмаки бабушки Азата представляют собой непересекающиеся равнобедренные треугольники, вершины которых имеют целые координаты (начало координат в левом нижнем углу коробки). Хотя бы одна сторона каждого эчпочмака параллельна стороне коробки.

Андрей решил оставить уцелевшие эчпочмаки на своих местах, а взамен съеденных приготовить новые и расположить их так, чтобы никакие два эчпочмака не пересекались и в коробке не осталось свободного места. Приготовленные Андреем эчпочмаки также должны быть равнобедренными треугольниками, их вершины должны иметь целочисленные координаты и хотя бы одна из сторон должна быть параллельна стороне коробки.

Определите минимальное количество эчпочмаков, которые должен приготовить Андрей и координаты, в которых их необходимо разместить. Если правильных ответов несколько −− выведите любой из них.
Формат ввода

В первой строке вводится три целых числа NN, MM и KK (1≤N,M≤41≤N,M≤4, 0≤K≤320≤K≤32) −− размеры коробки и количество уцелевших эчпочмаков бабушки Азата.

Следующие KK строк содержат по 6 координат (x1,y1x1,y1), (x2,y2x2,y2), (x3,y3x3,y3) (0≤xi≤N0≤xi​≤N, 0≤yi≤M0≤yi​≤M).
Формат вывода

Выведите число Ө −− минимальное количество эчпочмаков, которые должен приготовить Андрей.

В следующих Ө строках выведите по 6 чисел −− координаты эчпочмаков в том же формате, как во входных данных.

Если правильных ответов несколько −− выведите любой из них.
Примечание

Рисунки соответствуют примерам. Эчпочмаки от бабушки покрашены в зеленый, а приготовленные Андреем имеют красный контур

Ограничения

Ограничение времени

    3 с

Ограничение памяти

    512 МБ

Пример 1
Ввод

4 4 0

Вывод

2
0 0 0 4 4 0 
0 4 4 0 4 4 

Пример 2
Ввод

2 3 1
1 1 2 2 1 2

Вывод

5
0 0 2 0 2 2 
0 1 0 3 2 3 
0 1 1 1 1 2 
0 0 0 1 1 1 
1 2 2 2 2 3 
