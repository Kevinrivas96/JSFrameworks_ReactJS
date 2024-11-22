import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  const [trendingMovies, setTrendingMovies] = useState([
    {
        "page": 1,
        "results": [
            {
                "adult": false,
                "backdrop_path": "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
                "genre_ids": [
                    16,
                    878,
                    10751
                ],
                "id": 1184918,
                "original_language": "en",
                "original_title": "The Wild Robot",
                "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
                "popularity": 1818.285,
                "poster_path": "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
                "release_date": "2024-09-12",
                "title": "The Wild Robot",
                "video": false,
                "vote_average": 8.474,
                "vote_count": 2975
            },
            {
                "adult": false,
                "backdrop_path": "/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg",
                "genre_ids": [
                    28,
                    12,
                    18
                ],
                "id": 558449,
                "original_language": "en",
                "original_title": "Gladiator II",
                "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
                "popularity": 1760.337,
                "poster_path": "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
                "release_date": "2024-11-13",
                "title": "Gladiator II",
                "video": false,
                "vote_average": 6.796,
                "vote_count": 524
            },
            {
                "adult": false,
                "backdrop_path": "/2fxnTXr8NwyTFkunkimJkGkhqfy.jpg",
                "genre_ids": [
                    18,
                    28,
                    27
                ],
                "id": 1118031,
                "original_language": "es",
                "original_title": "Apocalipsis Z: el principio del fin",
                "overview": "When a kind of rabies that transforms people into aggressive creatures spreads across the planet, Manel isolates himself at home with his cat, relying on his wits to survive; but soon they must go out in search of food, by land and by sea, dodging many dangers.",
                "popularity": 1556.7,
                "poster_path": "/wIGJnIFQlESkC2rLpfA8EDHqk4g.jpg",
                "release_date": "2024-10-04",
                "title": "Apocalypse Z: The Beginning of the End",
                "video": false,
                "vote_average": 6.764,
                "vote_count": 519
            },
            {
                "adult": false,
                "backdrop_path": "/kwXycPsLA6SV3KUOagn343TtMOf.jpg",
                "genre_ids": [
                    28,
                    878,
                    53
                ],
                "id": 791042,
                "original_language": "en",
                "original_title": "Levels",
                "overview": "After witnessing his girlfriend's murder, a man risks everything - including reality itself - to discover the truth.",
                "popularity": 1396.459,
                "poster_path": "/2ZdnmSCPm3ZcLc0CcTYqRvoyJLE.jpg",
                "release_date": "2024-11-01",
                "title": "Levels",
                "video": false,
                "vote_average": 5.6,
                "vote_count": 18
            },
            {
                "adult": false,
                "backdrop_path": "/dvBCdCohwWbsP5qAaglOXagDMtk.jpg",
                "genre_ids": [
                    28,
                    35,
                    878
                ],
                "id": 533535,
                "original_language": "en",
                "original_title": "Deadpool & Wolverine",
                "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
                "popularity": 1195.723,
                "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
                "release_date": "2024-07-24",
                "title": "Deadpool & Wolverine",
                "video": false,
                "vote_average": 7.7,
                "vote_count": 5516
            },
            {
                "adult": false,
                "backdrop_path": "/iR79ciqhtaZ9BE7YFA1HpCHQgX4.jpg",
                "genre_ids": [
                    27,
                    9648
                ],
                "id": 1100782,
                "original_language": "en",
                "original_title": "Smile 2",
                "overview": "About to embark on a new world tour, global pop sensation Skye Riley begins experiencing increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and the pressures of fame, Skye is forced to face her dark past to regain control of her life before it spirals out of control.",
                "popularity": 1191.008,
                "poster_path": "/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg",
                "release_date": "2024-10-16",
                "title": "Smile 2",
                "video": false,
                "vote_average": 6.911,
                "vote_count": 496
            },
            {
                "adult": false,
                "backdrop_path": "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
                "genre_ids": [
                    18,
                    27,
                    878
                ],
                "id": 933260,
                "original_language": "en",
                "original_title": "The Substance",
                "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
                "popularity": 1124.624,
                "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
                "release_date": "2024-09-07",
                "title": "The Substance",
                "video": false,
                "vote_average": 7.285,
                "vote_count": 2113
            },
            {
                "adult": false,
                "backdrop_path": "/2h9yTYWTb909J28bzNTIE7dyNqP.jpg",
                "genre_ids": [
                    16,
                    878,
                    12,
                    10751
                ],
                "id": 698687,
                "original_language": "en",
                "original_title": "Transformers One",
                "overview": "The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but once were friends bonded like brothers who changed the fate of Cybertron forever.",
                "popularity": 1110.853,
                "poster_path": "/qbkAqmmEIZfrCO8ZQAuIuVMlWoV.jpg",
                "release_date": "2024-09-11",
                "title": "Transformers One",
                "video": false,
                "vote_average": 8.1,
                "vote_count": 737
            },
            {
                "adult": false,
                "backdrop_path": "/1FBHAQnq7Bs3djBmaNkfdVbnCUE.jpg",
                "genre_ids": [
                    28,
                    53
                ],
                "id": 1124641,
                "original_language": "en",
                "original_title": "Classified",
                "overview": "Operating alone in the field for more than 20 years, a CIA hitman uses the \"Help Wanted\" section of the newspapers to get his orders from the Agency. His long-lost daughter, now a UK MI6 analyst, tracks him down to deliver shocking news: his CIA boss has been dead for years and the division long since shut down. Together, they set out to discover whose orders he's been executing.",
                "popularity": 1010.91,
                "poster_path": "/3k8jv1kSAAc0rCfFGtWDDQL4dfK.jpg",
                "release_date": "2024-09-19",
                "title": "Classified",
                "video": false,
                "vote_average": 5.549,
                "vote_count": 61
            },
            {
                "adult": false,
                "backdrop_path": "/uVlUu174iiKhsUGqnOSy46eIIMU.jpg",
                "genre_ids": [
                    18,
                    14,
                    10749
                ],
                "id": 402431,
                "original_language": "en",
                "original_title": "Wicked",
                "overview": "Elphaba, a young woman misunderstood because of her green skin, and Glinda, a popular aristocrat gilded by privilege, become unlikely friends in the fantastical Land of Oz. As the two women struggle with their opposing personalities, their friendship is tested as both begin to fulfill their destinies as Glinda the Good and the Wicked Witch of the West.",
                "popularity": 1009.435,
                "poster_path": "/c5Tqxeo1UpBvnAc3csUm7j3hlQl.jpg",
                "release_date": "2024-11-20",
                "title": "Wicked",
                "video": false,
                "vote_average": 7.6,
                "vote_count": 56
            },
            {
                "adult": false,
                "backdrop_path": "/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
                "genre_ids": [
                    27,
                    878
                ],
                "id": 945961,
                "original_language": "en",
                "original_title": "Alien: Romulus",
                "overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
                "popularity": 994.629,
                "poster_path": "/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
                "release_date": "2024-08-13",
                "title": "Alien: Romulus",
                "video": false,
                "vote_average": 7.261,
                "vote_count": 2347
            },
            {
                "adult": false,
                "backdrop_path": "/hkJhGayONXn96CqIRM9GhWKnlCf.jpg",
                "genre_ids": [
                    28,
                    12,
                    16,
                    14
                ],
                "id": 1014505,
                "original_language": "ja",
                "original_title": "劇場版「オーバーロード」聖王国編",
                "overview": "After twelve years of playing his favorite MMORPG game, Momonga logs in for the last time only to find himself transported into its world playing it indefinitely. Throughout his adventures, his avatar ascends to the title of Sorcerer King Ains Ooal Gown. Once prosperous but now on the brink of ruin, The Sacred Kingdom enjoyed years of peace after construction of an enormous wall protecting them from neighboring invasions. But, one day this comes to an end when the Demon Emperor Jaldabaoth arrives with an army of villainous demi-humans. Fearing invasion of their own lands, the neighboring territory of the Slane Theocracy is forced to beg their enemies at the Sorcerer Kingdom for help. Heeding the call, Momonga, now known as the Sorcerer King Ains Ooal Gown, rallies the Sorcerer Kingdom and its undead army to join the fight alongside the Sacred Kingdom and the Slane Theocracy in hopes to defeat the Demon Emperor.",
                "popularity": 884.424,
                "poster_path": "/jEvytxNa5mfW7VAUmDWsZtIdATc.jpg",
                "release_date": "2024-09-20",
                "title": "OVERLORD: The Sacred Kingdom",
                "video": false,
                "vote_average": 7.4,
                "vote_count": 14
            },
            {
                "adult": false,
                "backdrop_path": "/9msuazXGWAyl7vhxVFU7e7Bb5Ik.jpg",
                "genre_ids": [
                    18,
                    10749
                ],
                "id": 179387,
                "original_language": "tl",
                "original_title": "Heavenly Touch",
                "overview": "Jonard is having trouble making ends meet. His mother is suffering from depression, and he and his sister are forced to quit school in order to take care of her. One day, Jonard meets up his friend Rodel, and Rodel introduces him to the world of massage parlors. Rodel teaches him massage, and brings him to Heavenly Touch, a syndicate-run massage parlor that mostly caters to homosexuals.",
                "popularity": 862.539,
                "poster_path": "/ory8WuAqznTE7lfopTSymHpop2t.jpg",
                "release_date": "2009-05-12",
                "title": "Heavenly Touch",
                "video": false,
                "vote_average": 6.5,
                "vote_count": 22
            },
            {
                "adult": false,
                "backdrop_path": "/rOmUuQEZfPXglwFs5ELLLUDKodL.jpg",
                "genre_ids": [
                    28,
                    35,
                    14
                ],
                "id": 845781,
                "original_language": "en",
                "original_title": "Red One",
                "overview": "After Santa Claus (codename: Red One) is kidnapped, the North Pole's Head of Security must team up with the world's most infamous bounty hunter in a globe-trotting, action-packed mission to save Christmas.",
                "popularity": 842.766,
                "poster_path": "/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
                "release_date": "2024-10-31",
                "title": "Red One",
                "video": false,
                "vote_average": 6.6,
                "vote_count": 146
            },
            {
                "adult": false,
                "backdrop_path": "/9s9o9RT9Yj6nDuRJjnJm78WFoFl.jpg",
                "genre_ids": [
                    28,
                    27,
                    53,
                    878
                ],
                "id": 1051896,
                "original_language": "en",
                "original_title": "Arcadian",
                "overview": "In the near future, on a decimated Earth, Paul and his twin sons face terror at night when ferocious creatures awaken. When Paul is nearly killed, the boys come up with a plan for survival, using everything their father taught them to keep him alive.",
                "popularity": 818.13,
                "poster_path": "/spWV1eRzlDxvai8LbxwAWR0Vst4.jpg",
                "release_date": "2024-04-12",
                "title": "Arcadian",
                "video": false,
                "vote_average": 6.1,
                "vote_count": 447
            },
            {
                "adult": false,
                "backdrop_path": "/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
                "genre_ids": [
                    16,
                    10751,
                    35,
                    28
                ],
                "id": 519182,
                "original_language": "en",
                "original_title": "Despicable Me 4",
                "overview": "Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
                "popularity": 760.703,
                "poster_path": "/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
                "release_date": "2024-06-20",
                "title": "Despicable Me 4",
                "video": false,
                "vote_average": 7.1,
                "vote_count": 2188
            },
            {
                "adult": false,
                "backdrop_path": "/llIXQAndg5kB6SWlp6ouUdO7Zxd.jpg",
                "genre_ids": [
                    28,
                    12,
                    18,
                    36,
                    10749,
                    53
                ],
                "id": 1084736,
                "original_language": "fr",
                "original_title": "Le Comte de Monte-Cristo",
                "overview": "Edmond Dantes becomes the target of a sinister plot and is arrested on his wedding day for a crime he did not commit. After 14 years in the island prison of Château d’If, he manages a daring escape. Now rich beyond his dreams, he assumes the identity of the Count of Monte-Cristo and exacts his revenge on the three men who betrayed him.",
                "popularity": 733.738,
                "poster_path": "/zw4kV7npGtaqvUxvJE9IdqdFsNc.jpg",
                "release_date": "2024-06-28",
                "title": "The Count of Monte-Cristo",
                "video": false,
                "vote_average": 8.2,
                "vote_count": 872
            },
            {
                "adult": false,
                "backdrop_path": "/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg",
                "genre_ids": [
                    16,
                    10751,
                    12,
                    35,
                    18
                ],
                "id": 1022789,
                "original_language": "en",
                "original_title": "Inside Out 2",
                "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
                "popularity": 709.115,
                "poster_path": "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
                "release_date": "2024-06-11",
                "title": "Inside Out 2",
                "video": false,
                "vote_average": 7.589,
                "vote_count": 4785
            }
        ],
        "total_pages": 47266,
        "total_results": 945308
    }]);


  return (
    <>

    </>
  )
}

export default App
