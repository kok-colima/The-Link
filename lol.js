// JavaScript Document
function cjson(){
var json = jQuery.parseJSON('{\
  "conversacion": {\
    "hola": {\
      "guion": [\
        {\
          "id": "1101",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Hi?",\
          "siguiente1": "1102",\
          "siguiente2": "1103"\
        },\
        {\
          "id": "1102",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Hi",\
          "siguiente1": "1104",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1103",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "I bring you back",\
          "siguiente1": "1105",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1104",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Where am I?",\
          "siguiente1": "1103",\
          "siguiente2": "1106"\
        },\
        {\
          "id": "1105",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "What?! how did you do that?",\
          "siguiente1": "1107",\
          "siguiente2": "1108"\
        },\
        {\
          "id": "1106",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "This is the living world",\
          "siguiente1": "1109",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1107",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "This app is doing the job",\
          "siguiente1": "1110",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1108",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "I want to talk with you",\
          "siguiente1": "1111",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1109",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Oh I get it,\ but how do you do that?",\
          "siguiente1": "1112",\
          "siguiente2": "1107"\
        },\
        {\
          "id": "1110",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Why? you need something? because play with paranormal stuff isn´t that fun",\
          "siguiente1": "1113",\
          "siguiente2": "1108"\
        },\
        {\
          "id": "1111",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "But I don´t. Play with this kind of things is dangerous,\ to me and to you",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1112",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "It doesn´t matter,\ I want to talk with you",\
          "siguiente1": "1114",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1113",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "No,\ I´m just playing",\
          "siguiente1": "1115",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1114",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Thanks,\ but you know that I´m already dead and that means you have to continue by your own",\
          "siguiente1": "1116",\
          "siguiente2": "1117"\
        },\
        {\
          "id": "1115",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "This is not so funny,\ playing with dead is dangerous you must stop",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1116",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "That´s sad but I understand",\
          "siguiente1": "1118",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1117",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "I don´t want things to be like this",\
          "siguiente1": "1117",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1118",\
          "tipo": "pregunta",\
          "fin": "si",\
          "texto": "I´m glad to see you and one day we will meet again but not now. Bood bye.",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1119",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "Listen,\ there are time for everything but not now. This place is dangerous.",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1201",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Is somebody there?",\
          "siguiente1": "1202",\
          "siguiente2": "1203"\
        },\
        {\
          "id": "1202",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Hello,\ can you hear me?",\
          "siguiente1": "1204",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1203",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Hi,\ are you a ghost?",\
          "siguiente1": "1205",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1204",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "What is this place?,\ why am I here?",\
          "siguiente1": "1206",\
          "siguiente2": "1207"\
        },\
        {\
          "id": "1205",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Ghost sounds ridiculous but yes I´m a spirit. Why you bring me back?",\
          "siguiente1": "1207",\
          "siguiente2": "1208"\
        },\
        {\
          "id": "1206",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "I bring you back with this app",\
          "siguiente1": "1209",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1207",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "I to talk with you",\
          "siguiente1": "1210",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1208",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "This is an experiment",\
          "siguiente1": "1211",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1209",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "But do you need something? because stay here is dangerous to me and to you",\
          "siguiente1": "1212",\
          "siguiente2": "1208"\
        },\
        {\
          "id": "1210",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Listen,\ I already die and the correct is let me rest in peace,\ continue with your life,\ you have one to live it",\
          "siguiente1": "1212",\
          "siguiente2": "1213"\
        },\
        {\
          "id": "1211",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "What?! This is just a game to you? Do you understand that play with the unknown is dangerous?",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1212",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "I want to know how you doing there",\
          "siguiente1": "1214",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1213",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Ok,\ I will leave you rest",\
          "siguiente1": "1215",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1214",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "Oh,\ well,\ it´s fine,\ but there one doesn´t care about that kind of things,\ one doesn´t care about anything. But I´m worry now,\ because and for you. This is not as safe as you think.",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1215",\
          "tipo": "pregunta",\
          "fin": "si",\
          "texto": "Thank you,\ one day but not now we will met again",\
          "siguiente1": "1117",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1301",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Do you bring me back?",\
          "siguiente1": "1302",\
          "siguiente2": "1303"\
        },\
        {\
          "id": "1302",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Yes",\
          "siguiente1": "1304",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1303",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "I´m just trying this app",\
          "siguiente1": "1305",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1304",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Why,\ do you need something?",\
          "siguiente1": "1306",\
          "siguiente2": "1307"\
        },\
        {\
          "id": "1305",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Oh that´s a really dumb reason to play with paranormal",\
          "siguiente1": "1306",\
          "siguiente2": "1308"\
        },\
        {\
          "id": "1306",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "I want to talk",\
          "siguiente1": "1309",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1307",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "No,\ I just want to see",\
          "siguiente1": "1305",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1308",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "How does it feel to be dead?",\
          "siguiente1": "1310",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1309",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Bring me back is not a good idea,\ you will have time in future for that but now enjoy your life",\
          "siguiente1": "1308",\
          "siguiente2": "1311"\
        },\
        {\
          "id": "1310",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "To be honest,\ nothing,\ you stop caring about anything,\ that´s why they call it rest,\ but now that you bring me here I´m worry for you",\
          "siguiente1": "1312",\
          "siguiente2": "1313"\
        },\
        {\
          "id": "1311",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "It was a pleasure to greet you. Goodbye",\
          "siguiente1": "1314",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1312",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Why are you worried for me?",\
          "siguiente1": "1315",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1313",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "I don´t care",\
          "siguiente1": "1316",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1314",\
          "tipo": "pregunta",\
          "fin": "si",\
          "texto": "Thanks and good bye. Remmember,\ dead is just a different way but that doesn´t mean you need to rush to walk it,\ there is time for everything. Bye.",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1315",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "There are things you should know,\ maybe that make you stop using this app",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1316",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "You should and I will tell you why",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1401",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Hello,\ I have bad new for you",\
          "siguiente1": "1402",\
          "siguiente2": "1403"\
        },\
        {\
          "id": "1402",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Hi,\ I bring you to talk",\
          "siguiente1": "1404",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1403",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Bad news?",\
          "siguiente1": "1405",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1404",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "I know and that´s the bad new,\ I´m dead already",\
          "siguiente1": "1406",\
          "siguiente2": "1407"\
        },\
        {\
          "id": "1405",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Yes,\ I´m dead but bring me back is the worst idea",\
          "siguiente1": "1407",\
          "siguiente2": "1408"\
        },\
        {\
          "id": "1406",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "With this app that´s not a problem",\
          "siguiente1": "1409",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1407",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "We can talk now",\
          "siguiente1": "1410",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1408",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Why?",\
          "siguiente1": "1405",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1409",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "The problem isn´t if you can or not,\ the problem is that you must not play with dead",\
          "siguiente1": "1412",\
          "siguiente2": "1413"\
        },\
        {\
          "id": "1410",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "The point of the bad new is ´I´m dead so let me rest in peace´ do that or something bad will happen to you and me",\
          "siguiente1": "1413",\
          "siguiente2": "1414"\
        },\
        {\
          "id": "1411",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Play with dead and paranormal things,\ that´s the problem. This kind of things have bad consecuences",\
          "siguiente1": "1413",\
          "siguiente2": "1415"\
        },\
        {\
          "id": "1412",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "I don´t care about that",\
          "siguiente1": "1416",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1413",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Ok,\ I will let you go",\
          "siguiente1": "1417",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1414",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Something bad?",\
          "siguiente1": "1418",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1415",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "I know the risks",\
          "siguiente1": "1419",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1416",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "I´ll aware you and that´s all I can do for you",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1417",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "Thanks. I´ll see you again in a few years. Good bye",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1418",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "You will not leave until I convince you,\ well then listen this...",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "1419",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "No,\ you don´t and I will shouw you there are things you can´t control even if you know about them",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        }\
      ]\
    },\
    "peligro": {\
      "guion": [\
        {\
          "id": "2101",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Spirits rest,\ but when you bring them back they are vulnerable,\ that´s why is dangerous to me",\
          "siguiente1": "2102",\
          "siguiente2": "2103"\
        },\
        {\
          "id": "2102",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Vulnerable to what?",\
          "siguiente1": "2104",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2103",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Show me",\
          "siguiente1": "2105",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2104",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "When dogs bark without reason,\ when you hear something but you don´t know what,\ when you see something and convince yourself there is nothing,\ there are them,\ watching",\
          "siguiente1": "2110",\
          "siguiente2": "2111"\
        },\
        {\
          "id": "2105",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Show you?,\ what?",\
          "siguiente1": "2108",\
          "siguiente2": "2109"\
        },\
        {\
          "id": "2110",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "What are those things?",\
          "siguiente1": "2114",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2111",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Why you fear them?",\
          "siguiente1": "2115",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2106",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Talk to me",\
          "siguiente1": "2108",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2107",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Your appearance",\
          "siguiente1": "2109",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2108",\
          "tipo": "grabadora",\
          "fin": "no",\
          "texto": "-",\
          "siguiente1": "2112",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2109",\
          "tipo": "camara",\
          "fin": "no",\
          "texto": "-",\
          "siguiente1": "2113",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2112",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "I think that´s enought,\ you have now what you need,\ let me go",\
          "siguiente1": "2116",\
          "siguiente2": "2117"\
        },\
        {\
          "id": "2113",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "I did it,\ can you let me go now?",\
          "siguiente1": "2116",\
          "siguiente2": "2117"\
        },\
        {\
          "id": "2114",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "Those things are spirits too,\ but they eat other spirits,\ and if one of them eat me it will try to eat you too",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2115",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "Because that things eat spirits and use them,\ after that maybe they will try to eat you",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2116",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Yes",\
          "siguiente1": "2118",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2117",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "No",\
          "siguiente1": "2119",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2118",\
          "tipo": "pregunta",\
          "fin": "si",\
          "texto": "Thanks,\ and I hope you never do this again. Farewell.",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2119",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "What are you waiting?,\ we are in danger",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2201",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "The world is not safe as you think,\ but you have a body,\ that protects you,\ but me,\ I don´t have anything to protect me",\
          "siguiente1": "2202",\
          "siguiente2": "2203"\
        },\
        {\
          "id": "2202",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Protect you from what?",\
          "siguiente1": "2204",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2203",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Why isn´t safe?",\
          "siguiente1": "2205",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2204",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Those things eat spirits,\ and they will come for me,\ and if you give them a chance,\ for you too.",\
          "siguiente1": "2206",\
          "siguiente2": "2207"\
        },\
        {\
          "id": "2205",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "People tends to ignore things they don´t understand,\ but those things don´t left even if you decided to ignore them",\
          "siguiente1": "2208",\
          "siguiente2": "2209"\
        },\
        {\
          "id": "2206",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Are those things here?",\
          "siguiente1": "2210",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2207",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "You must left now",\
          "siguiente1": "2217",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2208",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "And what´s make them dangerous?",\
          "siguiente1": "2204",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2209",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Are those things here?",\
          "siguiente1": "2209",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2210",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Try to hear them",\
          "siguiente1": "2212",\
          "siguiente2": "2213"\
        },\
        {\
          "id": "2211",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Watch for yourself",\
          "siguiente1": "2214",\
          "siguiente2": "2215"\
        },\
        {\
          "id": "2212",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Ok,\ I want to try",\
          "siguiente1": "2209",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2213",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "No,\ I let you go",\
          "siguiente1": "2209",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2214",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "No,\ I let you go",\
          "siguiente1": "2209",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2215",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Ok,\ I want to try",\
          "siguiente1": "2209",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2216",\
          "tipo": "grabadora",\
          "fin": "no",\
          "texto": "-",\
          "siguiente1": "2219",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2217",\
          "tipo": "pregunta",\
          "fin": "si",\
          "texto": "Thanks,\ that´s the best for us,\ goodbye",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2218",\
          "tipo": "camara",\
          "fin": "no",\
          "texto": "-",\
          "siguiente1": "2220",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2219",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "They are comming,\ you must hurry and let me go",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2220",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "That´s why you should stop now",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2301",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "You bring me back as a spirit,\ but everything I can do is throught this app,\ I can´t escape if you don´t let me",\
          "siguiente1": "2302",\
          "siguiente2": "2303"\
        },\
        {\
          "id": "2302",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Explain me why are you afraid",\
          "siguiente1": "2304",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2303",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "You can leave,\ farewell",\
          "siguiente1": "2305",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2304",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "This is a place for the living but those who are dead will vanish, so they need eat others to live, the uknown will try to eat me and they will come for you too, they will try to hurt you and kill you, because they want your spirit, not your body, they are comming look for yourself",\
          "siguiente1": "2306",\
          "siguiente2": "2307"\
        },\
        {\
          "id": "2305",\
          "tipo": "pregunta",\
          "fin": "si",\
          "texto": "I´m very glad you understand,\ good bye we will meet againg someday.",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2306",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Listen",\
          "siguiente1": "2308",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2307",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Watch",\
          "siguiente1": "2309",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2108",\
          "tipo": "grabadora",\
          "fin": "no",\
          "texto": "-",\
          "siguiente1": "2310",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2109",\
          "tipo": "camara",\
          "fin": "no",\
          "texto": "-",\
          "siguiente1": "2310",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2310",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "This is just the begining,\ with more paranormal activity they feel more attracted",\
          "siguiente1": "2311",\
          "siguiente2": "2312"\
        },\
        {\
          "id": "2311",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "I let you go",\
          "siguiente1": "2305",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2312",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Tell me more about them",\
          "siguiente1": "2313",\
          "siguiente2": "-"\
        },\
        {\
          "id": "2313",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "Come on, we are in danger. They eat spirits, and with this app you are giving them an oportunity to catch you",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        }\
      ]\
    },\
    "dejame": {\
      "guion": [\
        {\
          "id": "3101",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "This is dangerous now, you need to cut this",\
          "siguiente1": "3102",\
          "siguiente2": "3103"\
        },\
        {\
          "id": "3102",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "No,\ there is time yet",\
          "siguiente1": "3104",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3103",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Farewell",\
          "siguiente1": "3105",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3104",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Time for what, what else you need?",\
          "siguiente1": "3106",\
          "siguiente2": "3107"\
        },\
        {\
          "id": "3105",\
          "tipo": "pregunta",\
          "fin": "si",\
          "texto": "Thank you, thank you, bye and be careful",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3106",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Talk",\
          "siguiente1": "3108",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3107",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Nothing is going to happen",\
          "siguiente1": "3109",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3108",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Listen, there is time for everything, maybe I´m dead now but one day you too, so enjoy the time here and don´t rush to the end, after all. I will be there, BUT I WILL NO BE THERE IF YOU DON´T LET ME GO NOW!",\
          "siguiente1": "3110",\
          "siguiente2": "3111"\
        },\
        {\
          "id": "3109",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "You... you are going to kill my soul!",\
          "siguiente1": "3112",\
          "siguiente2": "3113"\
        },\
        {\
          "id": "3110",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Don´t get mad",\
          "siguiente1": "3114",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3111",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Good bye",\
          "siguiente1": "3115",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3112",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "No, you will be fine",\
          "siguiente1": "3116",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3113",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Who cares, you are already dead",\
          "siguiente1": "3116",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3114",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "Then listen what I´m saying you must close this and... 01000001010010000100100000100001",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3115",\
          "tipo": "pregunta",\
          "fin": "si",\
          "texto": "Close this and go away they are near. Bye",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3116",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "I will take you with me,\ you will pay even if I can´t,\ it´s too late for you too... DI01000101",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3201",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Stop doing this,\ let me go now",\
          "siguiente1": "3202",\
          "siguiente2": "3203"\
        },\
        {\
          "id": "3202",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "No",\
          "siguiente1": "3204",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3203",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Ok,\ you can leave now",\
          "siguiente1": "3205",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3204",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Why not? I told you we are in danger both of us. They want to eat me and they will kill you and eat you too",\
          "siguiente1": "3206",\
          "siguiente2": "3207"\
        },\
        {\
          "id": "3205",\
          "tipo": "pregunta",\
          "fin": "si",\
          "texto": "Thank you, see you, don´t call me again",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3206",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "NO",\
          "siguiente1": "3208",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3207",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Ok,\ bye",\
          "siguiente1": "3205",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3208",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Please I´m begging you. Let me go, let me go, let me go",\
          "siguiente1": "3209",\
          "siguiente2": "3210"\
        },\
        {\
          "id": "3209",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "No!",\
          "siguiente1": "3212",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3210",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "You have suffered enough,\ you can leave",\
          "siguiente1": "3211",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3211",\
          "tipo": "pregunta",\
          "fin": "si",\
          "texto": "You... gaaahh... bye",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3212",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "If you don´t let me go I´ll force 0111100101101111u",\
          "siguiente1": "3213",\
          "siguiente2": "3214"\
        },\
        {\
          "id": "3213",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "NO!",\
          "siguiente1": "3215",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3214",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "How?",\
          "siguiente1": "3216",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3215",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "Please,\ please,\ I´m scared,\ please,\ please,\ please,\ please,\ plea111001101100101...",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "3216",\
          "tipo": "pregunta",\
          "fin": "next",\
          "texto": "This app isn´t just that, it´s a door and you will lit it open, then they will com3 4 0101100101001111U",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        }\
      ]\
    },\
    "demonio": {\
      "guion": [\
        {\
          "id": "4101",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "011001000110100101100101",\
          "siguiente1": "4102",\
          "siguiente2": "4103"\
        },\
        {\
          "id": "4102",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "What?",\
          "siguiente1": "4104",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4103",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "0100100001101001",\
          "siguiente1": "4105",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4104",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": ".........",\
          "siguiente1": "4106",\
          "siguiente2": "4107"\
        },\
        {\
          "id": "4105",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "!@?001001010010011000100100/¡?)=",\
          "siguiente1": "4108",\
          "siguiente2": "4109"\
        },\
        {\
          "id": "4106",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Say something",\
          "siguiente1": "4110",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4107",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Hi?",\
          "siguiente1": "4110",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4108",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "WTF?!",\
          "siguiente1": "4110",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4109",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "No sense",\
          "siguiente1": "4111",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4110",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "......:",\
          "siguiente1": "4112",\
          "siguiente2": "4113"\
        },\
        {\
          "id": "4111",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "What can bring back dead; make you cry, make you laugh, and make you young?",\
          "siguiente1": "4116",\
          "siguiente2": "4117"\
        },\
        {\
          "id": "4112",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "This is stupid",\
          "siguiente1": "4114",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4113",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "This is not funny",\
          "siguiente1": "4115",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4114",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "......:)",\
          "siguiente1": "4118",\
          "siguiente2": "4119"\
        },\
        {\
          "id": "4115",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "U N33D T0 H3AR TH15",\
          "siguiente1": "4120",\
          "siguiente2": "4121"\
        },\
        {\
          "id": "4116",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "You?",\
          "siguiente1": "4122",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4117",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Memories?",\
          "siguiente1": "4123",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4118",\
          "tipo": "camara",\
          "fin": "no",\
          "texto": "-",\
          "siguiente1": "4124",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4119",\
          "tipo": "camara",\
          "fin": "no",\
          "texto": "-",\
          "siguiente1": "4124",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4120",\
          "tipo": "grabadora",\
          "fin": "no",\
          "texto": "-",\
          "siguiente1": "4124",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4121",\
          "tipo": "grabadora",\
          "fin": "no",\
          "texto": "-",\
          "siguiente1": "4124",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4122",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Haha7a5a... Afraid? You should, you must, but there is an option for you...",\
          "siguiente1": "4125",\
          "siguiente2": "4126"\
        },\
        {\
          "id": "4123",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Like the memories in front your eyes before your death... are you afraid?, you want to escape?... there is an option for you",\
          "siguiente1": "4125",\
          "siguiente2": "4126"\
        },\
        {\
          "id": "4124",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "You are next but I give you an option",\
          "siguiente1": "4125",\
          "siguiente2": "4126"\
        },\
        {\
          "id": "4125",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "01000101 01000001 01010100 00100000 01001101 01000101",\
          "siguiente1": "4127",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4126",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "What is that option?",\
          "siguiente1": "4128",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4128",\
          "tipo": "pregunta",\
          "fin": "no",\
          "texto": "Just let me free in the world, I´ll eat others and when your days come to the end I will come for you, you can enjoy your life or enjoy anything, that´s better than nothing... choose",\
          "siguiente1": "4130",\
          "siguiente2": "4131"\
        },\
        {\
          "id": "4130",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Reject",\
          "siguiente1": "4127",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4131",\
          "tipo": "respuesta",\
          "fin": "no",\
          "texto": "Accept",\
          "siguiente1": "4132",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4132",\
          "tipo": "pregunta",\
          "fin": "si",\
          "texto": "We will meet again... I´ll be watching you...",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        },\
        {\
          "id": "4127",\
          "tipo": "creepypasta",\
          "fin": "-",\
          "texto": "-",\
          "siguiente1": "-",\
          "siguiente2": "-"\
        }\
      ]\
    }\
  }\
}');
return json;
	}