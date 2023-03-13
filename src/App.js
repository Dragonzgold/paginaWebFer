import "../src/css/inicio.css";
import React, { useState } from "react";
import eduardo from "../src/eduardo.png";
import eduardoPaloma from "../src/eduardoPaloma.jpeg";

function App() {
  const data = [
    {
      id: "1",
      frase: "Eduardo es un mamawebazo",
    },
    {
      id: "2",
      frase: "Eduardo is a mamawebo",
    },
    {
      id: "3",
      frase: "Eduardo est un mamawebo",
    },
    {
      id: "4",
      frase: "Eduardo jilatajj mamawebo satawa",
    },
    {
      id: "5",
      frase: "إدواردو ماماويبو",
    },
    {
      id: "6",
      frase: "eduardo এজন মামাৱেবো",
    },
    {
      id: "7",
      frase: "Эдуарда - мамавэба",
    },
    {
      id: "8",
      frase: "eduardo သည် mamawebo ဖြစ်သည်။",
    },
    {
      id: "9",
      frase: "едуардо е mamawebo",
    },
    {
      id: "10",
      frase: "ಎಡ್ವಾರ್ಡೊ ಒಬ್ಬ ಮಾಮಾವೆಬೊ",
    },

    {
      id: "11",
      frase: "maleït eduard",
    },
    {
      id: "12",
      frase: "zatracený Edward",
    },
    {
      id: "13",
      frase: "অভিশাপ এডওয়ার্ড",
    },
    {
      id: "14",
      frase: "sialan edward",
    },
    {
      id: "15",
      frase: "നാശം എഡ്വേർഡ്",
    },
    {
      id: "16",
      frase: "хараал идсэн Эдвард",
    },
    {
      id: "17",
      frase: "damn edward a ɔyɛ ɔbaabun",
    },
    {
      id: "18",
      frase: "פאַרשילטן עדוואַרד",
    },
    {
      id: "19",
      frase: "daalụ Edward",
    },
    {
      id: "20",
      frase: "אדוארד לעזאזל",
    },

    {
      id: "21",
      frase: "edward je sračka",
    },
    {
      id: "22",
      frase: "edward estas fekaĵo",
    },
    {
      id: "23",
      frase: "edward nye gbeɖuɖɔ ƒe akpa aɖe",
    },
    {
      id: "24",
      frase: "edward je jedno govno",
    },
    {
      id: "25",
      frase: "darn o shit ydy edward",
    },
    {
      id: "26",
      frase: "ಎಡ್ವರ್ಡ್ ಶಿಟ್ ತುಂಡು",
    },
    {
      id: "27",
      frase: "edward ndi chinthu choyipa",
    },
    {
      id: "28",
      frase: "Edward c'est de la merde",
    },
    {
      id: "29",
      frase: "Edward ແມ່ນ shit",
    },
    {
      id: "30",
      frase: "ئێدوارد شتێکی گەوادە",
    },

    {
      id: "31",
      frase: "에드워드는 똥을 먹는다",
    },
    {
      id: "32",
      frase: "Edward manghja merda",
    },
    {
      id: "33",
      frase: "Eduardus stercore manducat",
    },
    {
      id: "34",
      frase: "edvards ēd sūdus",
    },
    {
      id: "35",
      frase: "Edward na-eri ihe",
    },
    {
      id: "36",
      frase: "Edward mangia merda",
    },
    {
      id: "37",
      frase: "edward mangan telek",
    },
    {
      id: "38",
      frase: "Itheann Edward cac",
    },
    {
      id: "39",
      frase: "エドワードはたわごとを食べる",
    },
    {
      id: "40",
      frase: "edward ësst Schäiss",
    },

    {
      id: "41",
      frase: "εντουάρντο μαλπάριο",
    },
    {
      id: "42",
      frase: "ilimi malpario",
    },
    {
      id: "43",
      frase: "愛德華多·馬爾帕里奧",
    },
    {
      id: "44",
      frase: "เอดูอาร์โด มัลปาริโอ",
    },
    {
      id: "45",
      frase: "Едуардо Мальпаріо",
    },
    {
      id: "46",
      frase: "едуардо малпарио",
    },
    {
      id: "47",
      frase: "एडुआर्डो मालपारियो,એડ્યુઆર્ડો માલપારિયો",
    },
    {
      id: "48",
      frase: "eduardo malpario omuwandiisi webitabo",
    },
    {
      id: "49",
      frase: "eduardo Malpari",
    },
    {
      id: "50",
      frase: "เอดูอาร์โด มัลปาริโอ",
    },
    {
      id: "51",
    },
    {
      id: "52",
    },
    {
      id: "53",
    },
    {
      id: "54",
    },
    {
      id: "55",
      frase: "Ya se acabaron las 50, te podes ir"
    },
    {
      id: "56",
    },
    {
      id: "57",
    },
    {
      id: "58",
    },
    {
      id: "59",
    },
    {
      id: "60",
    },
    {
      id: "61",
      frase: "¿Por que sigues aqui?"
    },
    {
      id: "62",
      frase: "¿Te cuento un chiste?"
    },
    {
      id: "63",
      frase: "Habia una vez...."
    },
    {
      id: "64",
      frase: "Y dos son tres"
    },
    {
      id: "65",
      frase: "xDDDDDDDD"
    },

  ];
  const [counter, setCounter] = useState(0);

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="inicio">
      <div
        className="fondo"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        <img src={eduardo} className="imagenEduardo"/>
      </div>
      <div>
        <h1>{counter}</h1>
        <div key={data[counter].id}>
          <h1>{data[counter].frase}</h1>
          {counter === 50 ? (<img src={eduardoPaloma}/>) : null}
          {counter === 51 ? (<iframe width="355" height="631" src="https://www.youtube.com/embed/llStpfECNW4" title="mamaguebo digo glu glu glu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
