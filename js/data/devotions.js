/* ═══════════════════════════════════════════════════════════════
   ADDITIONAL DEVOTIONS
   - Stations of the Cross (14 traditional + Resurrection)
   - Examination of Conscience (Ten Commandments + Beatitudes)
   - Chaplets: St. Michael, Holy Wounds, St. Jude, Divine Mercy
   ═══════════════════════════════════════════════════════════════ */

/* ── STATIONS OF THE CROSS — Via Crucis ──
   Traditional form codified by St. Leonard of Port Maurice (18th c.)
   Scripture, meditation, and prayer for each station.
   Source: Roman Missal, traditional devotional texts, papal Via Crucis */
const STATIONS = {
    title: 'The Stations of the Cross',
    latin: 'Via Crucis',
    intro: 'The Way of the Cross is a devotion that retraces the Passion of Christ from his condemnation to his burial. Traditionally prayed during Lent and on Fridays, it allows the faithful to walk spiritually with the Lord through his sufferings. The faithful move from station to station, pausing at each to meditate on Christ\'s suffering and our own sins.',
    instructions: 'At each station, genuflect or bow and pray the versicle. Then read the Scripture, meditation, and closing prayer. Between stations, pray one Our Father, one Hail Mary, and one Glory Be.',
    opening: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.\n\nO Jesus, my Lord and my God, you walked the way of the Cross for love of me. I wish to walk it now with you. Open my eyes to see what you suffered. Open my heart to feel sorrow for my sins. Open my will to embrace your holy Cross. Grant me the grace of true repentance and a firm purpose of amendment, that I may share one day in the glory of your Resurrection.',
    versicle: 'V. We adore Thee, O Christ, and we bless Thee.\nR. Because by Thy holy Cross Thou hast redeemed the world.',
    closing: 'Lord Jesus Christ, by walking this Way of Sorrows, we have accompanied you to Calvary. We have witnessed your love, your courage, your forgiveness, and your obedience to the Father. Grant that the merits of your Passion and Death may wash away our sins, strengthen our faith, and bring us at last to the joy of the Resurrection. We ask this through your most holy Name, who live and reign with the Father and the Holy Spirit, one God, forever and ever. Amen.\n\nStabat Mater dolorosa, iuxta Crucem lacrimosa, dum pendebat Filius.',
    stations: [
        {
            num: 1,
            title: 'Jesus is condemned to death',
            scripture: 'Matthew 27:22-26 — Pilate said to them, "Then what shall I do with Jesus called Christ?" They all said, "Let him be crucified!" He released Barabbas to them, and after he had Jesus scourged, he handed him over to be crucified.',
            meditation: 'Pilate, knowing him innocent, hands Jesus over to be crucified rather than displease the crowd. An innocent man is condemned so that the guilty may go free. How often have I, like Pilate, washed my hands of the truth to avoid discomfort? How often have I chosen the approval of the world over the love of God?',
            prayer: 'Lord Jesus, you were condemned unjustly so that I might be set free. Give me the courage to stand for truth even when it is costly, and never to condemn the innocent by my silence. Our Father… Hail Mary… Glory Be…'
        },
        {
            num: 2,
            title: 'Jesus takes up his Cross',
            scripture: 'John 19:17 — So they took Jesus, and carrying the cross himself, he went out to what is called the Place of the Skull, in Hebrew, Golgotha.',
            meditation: 'The heavy wood of the Cross is laid upon his torn and bleeding shoulders. He does not refuse it, does not protest, does not ask why. He embraces it — because it is the instrument of our salvation. Every cross in my life is an invitation to share in his redemptive work.',
            prayer: 'Lord, when crosses come into my life — illness, failure, rejection, loneliness — help me not to run from them but to embrace them with you. Transform my suffering into love. Our Father… Hail Mary… Glory Be…'
        },
        {
            num: 3,
            title: 'Jesus falls the first time',
            scripture: 'Isaiah 53:4-5 — Yet it was our infirmities that he bore, our sufferings that he endured. He was pierced for our offenses, crushed for our sins; upon him was the chastisement that makes us whole, by his stripes we were healed.',
            meditation: 'Weakened by the scourging, the crowning with thorns, and the loss of blood, Jesus stumbles and falls face-first into the dust of the street. The weight that crushes him is not merely wood — it is the accumulated weight of every sin ever committed. My sins are in that weight.',
            prayer: 'Lord Jesus, you fell under the weight of my sins. When I fall into sin, give me the humility to acknowledge my weakness and the grace to rise again. Never let me stay in the dust of despair. Our Father… Hail Mary… Glory Be…'
        },
        {
            num: 4,
            title: 'Jesus meets his sorrowful Mother',
            scripture: 'Luke 2:34-35 — Simeon said to Mary: "Behold, this child is destined for the fall and rise of many in Israel. And you yourself a sword will pierce, so that the thoughts of many hearts may be revealed."',
            meditation: 'Somewhere along the Via Dolorosa, the eyes of Mother and Son meet. No words are needed. Simeon\'s prophecy is fulfilled — the sword pierces her Immaculate Heart. Yet she does not turn away. She walks with him, united in the offering. This is the hour of the Co-Redemptrix.',
            prayer: 'O Mary, Mother of Sorrows, you stood by your Son in his darkest hour. Stand by me in mine. Teach me to unite my suffering with the suffering of Christ for the salvation of souls. Our Father… Hail Mary… Glory Be…'
        },
        {
            num: 5,
            title: 'Simon of Cyrene helps Jesus carry the Cross',
            scripture: 'Mark 15:21 — They pressed into service a certain passerby, Simon, a Cyrenian, who was coming in from the country, the father of Alexander and Rufus, to carry his cross.',
            meditation: 'A bystander, a foreigner — "pressed into service." Simon did not volunteer. He was forced. And yet, in carrying the Cross of Christ, even reluctantly, he was transformed. He became the father of saints. Every act of charity, even the grudging ones, brings us closer to Christ.',
            prayer: 'Lord, when you ask me to help carry another\'s burden — a difficult neighbor, a sick relative, an inconvenient request — do not let me refuse. Let me see your face in everyone who needs me. Our Father… Hail Mary… Glory Be…'
        },
        {
            num: 6,
            title: 'Veronica wipes the face of Jesus',
            scripture: 'Isaiah 53:2-3 — He had no majestic bearing to catch our eye, no beauty to draw us to him. He was spurned and avoided by people, a man of suffering, accustomed to infirmity.',
            meditation: 'Tradition tells us that a woman named Veronica — Vera Icon, "true image" — pushed through the jeering crowd and the Roman soldiers to wipe the blood and sweat from the face of Jesus with her veil. On that cloth, his sacred face was imprinted. One small act of love in the midst of cruelty — and it has echoed through two thousand years.',
            prayer: 'Lord, give me the courage of Veronica — to act when others watch, to show kindness when the world is cruel, to recognize your face even when it is disfigured by suffering. Imprint your image upon my soul. Our Father… Hail Mary… Glory Be…'
        },
        {
            num: 7,
            title: 'Jesus falls a second time',
            scripture: 'Psalm 22:15-16 — Like water my life drains away; all my bones are out of joint. My heart has become like wax, melting away within me. As dry as a potsherd is my throat; my tongue sticks to my palate; you lay me in the dust of death.',
            meditation: 'He falls again. The same stones, the same dust, the same jeering crowd. His body, already broken, hits the ground a second time. This fall is for the sins of relapse — for the times I have confessed the same sins again and again and fallen back into the same patterns. Yet he rises. He always rises.',
            prayer: 'Jesus, when I fall into the same sins again, when I grow discouraged by my repeated failures, help me to remember that you fell and rose again. Give me perseverance. Never let me stop trying. Our Father… Hail Mary… Glory Be…'
        },
        {
            num: 8,
            title: 'Jesus consoles the women of Jerusalem',
            scripture: 'Luke 23:27-28,31 — A large crowd of people followed Jesus, including many women who mourned and lamented him. Jesus turned to them and said, "Daughters of Jerusalem, do not weep for me; weep instead for yourselves and for your children."',
            meditation: 'Even in his agony, Jesus thinks of others. He does not seek pity for himself — he warns the women of what is coming. His compassion extends beyond his own suffering to the suffering of the world. True sorrow is not sentimental weeping but the tears of repentance that lead to conversion.',
            prayer: 'Lord, turn my tears into true repentance. Let me weep not from sentimentality but from a genuine sorrow for sin — mine and the world\'s. Give me the grace of conversion. Our Father… Hail Mary… Glory Be…'
        },
        {
            num: 9,
            title: 'Jesus falls the third time',
            scripture: 'Lamentations 3:27-32 — It is good for a man to bear the yoke from his youth. Let him sit alone and in silence when he has laid it upon him; let him put his mouth in the dust — there may yet be hope. The Lord is not one to cast off forever.',
            meditation: 'Three falls — like Peter\'s three denials, like the three days in the tomb. This final fall, so close to Calvary, seems the most crushing. His body has nothing left. Yet from the dust of utter exhaustion, he rises one last time. There is no depth from which grace cannot raise us.',
            prayer: 'Lord, when I have hit bottom, when I have no strength left, when the goal seems impossibly far — lift me up. You who rose from this third fall, raise me from the grave of my sins. Our Father… Hail Mary… Glory Be…'
        },
        {
            num: 10,
            title: 'Jesus is stripped of his garments',
            scripture: 'John 19:23-24 — When the soldiers had crucified Jesus, they took his clothes and divided them into four shares. His tunic was seamless, woven in one piece from the top down. So they said, "Let\'s not tear it, but cast lots for it."',
            meditation: 'The tunic, woven by his Mother\'s hands, is torn from his wounds, reopening every lash of the scourging. He is stripped naked before the world — the Creator of all things, exposed and humiliated. He who clothed Adam and Eve in the garden is himself left bare, bearing our shame.',
            prayer: 'Jesus, you were stripped of everything — clothing, dignity, comfort — so that I might be clothed in grace. Strip me of my pride, my vanity, my attachment to the things of this world. Clothe me instead with your humility. Our Father… Hail Mary… Glory Be…'
        },
        {
            num: 11,
            title: 'Jesus is nailed to the Cross',
            scripture: 'Luke 23:33-34 — When they came to the place called the Skull, they crucified him and the criminals there, one on his right, the other on his left. Then Jesus said, "Father, forgive them, they know not what they do."',
            meditation: 'The hammer strikes. Iron pierces flesh and bone. The nails pin the Son of God to the wood of the Cross — hands that healed the sick, feet that walked on water. And from that Cross, his first word is not a curse but a prayer of forgiveness. Even for those who drove the nails. Even for me.',
            prayer: 'Lord Jesus, nailed to the Cross, you forgave your executioners. Teach me to forgive as you forgave — completely, immediately, from the heart. Nail my sins to your Cross, and let them die with you. Our Father… Hail Mary… Glory Be…'
        },
        {
            num: 12,
            title: 'Jesus dies on the Cross',
            scripture: 'John 19:28-30 — Jesus said, "I thirst." They put a sponge soaked in wine on a sprig of hyssop and put it up to his mouth. When Jesus had taken the wine, he said, "It is finished." And bowing his head, he handed over the spirit.',
            meditation: '"It is finished." Not a cry of defeat but a shout of triumph. The work the Father gave him to do is accomplished. The price of sin is paid. The gates of heaven, closed since Adam, are thrown open. The veil of the Temple is torn from top to bottom. God and man are reconciled. At the foot of the Cross, Mary and John stand — the Church is born.',
            prayer: 'Lord Jesus, by your Death you have conquered death. By your wounds we are healed. By your Blood we are redeemed. I adore you, O Christ. I thank you for the infinite price you paid for my salvation. Into your hands I commend my spirit. Our Father… Hail Mary… Glory Be…'
        },
        {
            num: 13,
            title: 'Jesus is taken down from the Cross',
            scripture: 'John 19:38-40 — Joseph of Arimathea, secretly a disciple of Jesus for fear of the Jews, asked Pilate if he could remove the body of Jesus. Nicodemus, the one who had first come to him at night, also came bringing a mixture of myrrh and aloes.',
            meditation: 'Joseph and Nicodemus — both secret disciples, both afraid — now come forward in the hour of greatest darkness. They take the broken body from the Cross and lay it in the arms of his Mother. The Pietà. Mary holds the body of her Son as she held him in the manger — with infinite tenderness and infinite sorrow. The Mother of God becomes the Mother of Sorrows.',
            prayer: 'O Mary, you held the lifeless body of your Son. Hold me, too, when I am broken. Teach me the strength of your silence, the depth of your sorrow, and the hope that endures beyond death. Our Father… Hail Mary… Glory Be…'
        },
        {
            num: 14,
            title: 'Jesus is laid in the tomb',
            scripture: 'Matthew 27:59-60 — Taking the body, Joseph wrapped it in clean linen and laid it in his new tomb that he had hewn in the rock. Then he rolled a huge stone across the entrance to the tomb and departed.',
            meditation: 'The stone is rolled shut. Silence descends. The Sabbath begins. To the world, it looks like the end — the final defeat of a failed prophet from Nazareth. But within the darkness of that sealed tomb, something is happening that no eye can see and no mind can comprehend. The seed has been planted. The grain of wheat has fallen into the earth and died. And from that death, all life will spring.',
            prayer: 'Lord, in the silence of the tomb, I wait with you. When my life feels sealed in darkness — when hope seems buried and the stone seems immovable — help me to trust that you are already at work in the silence. Let me rest in you, knowing that Easter morning will come. Our Father… Hail Mary… Glory Be…'
        },
        {
            num: 15,
            title: 'The Resurrection of Jesus',
            scripture: 'Matthew 28:5-6 — The angel said to the women, "Do not be afraid! I know that you are seeking Jesus the crucified. He is not here, for he has been raised just as he said. Come and see the place where he lay."',
            meditation: 'On the third day, the stone is rolled away — not to let Jesus out, but to let the world see that the tomb is empty. He is risen! Death itself is conquered. The Cross, once an instrument of shame, has become the Tree of Life. Every suffering, every station of this Way of Sorrows, is now illuminated by the light of Easter morning. Without the Resurrection, the Cross would be merely tragic. With it, the Cross becomes the doorway to eternal life.',
            prayer: 'Lord Jesus Christ, risen from the dead, you are the firstfruits of those who have fallen asleep. By your Resurrection, you have given us the hope of eternal life. As we have walked with you through the Way of the Cross, let us now walk with you into the light of the Resurrection. May we die with you to sin and rise with you to new life, now and forever. Alleluia! Our Father… Hail Mary… Glory Be…',
            optional: true
        }
    ]
};

/* ── EXAMINATION OF CONSCIENCE ── */
const EXAMINATION = {
    title: 'Examination of Conscience',
    latin: 'Examen Conscientiae',
    intro: 'A careful examination before the Sacrament of Reconciliation, organized by the Ten Commandments and the precepts of the Church. "Search me, O God, and know my heart" (Psalm 139:23).',
    opening: 'Come, Holy Spirit, enlighten my mind that I may know my sins; move my heart that I may be sorry for them; strengthen my will that I may make a firm purpose of amendment.',
    sections: [
        {
            commandment: 'I',
            title: 'I am the Lord your God; you shall have no other gods before me',
            questions: [
                'Have I given God time each day in prayer?',
                'Have I sought to love him with all my heart, mind, soul, and strength?',
                'Have I doubted or denied the truths of the Catholic faith? Have I taken false faiths or superstitions seriously (horoscopes, séances, the occult, New Age practices)?',
                'Have I been ashamed of being Catholic?',
                'Have I despaired of God\'s mercy or presumed upon it?',
                'Have I made my faith merely a private matter, neglecting Mass or the sacraments?'
            ]
        },
        {
            commandment: 'II',
            title: 'You shall not take the name of the Lord your God in vain',
            questions: [
                'Have I used God\'s name in vain — lightly, jokingly, or in anger?',
                'Have I sworn falsely (perjury), or made promises in God\'s name I did not intend to keep?',
                'Have I cursed others or spoken irreverently of holy things?',
                'Have I been disrespectful in church or during the Mass?'
            ]
        },
        {
            commandment: 'III',
            title: 'Remember to keep holy the Lord\'s Day',
            questions: [
                'Have I missed Sunday Mass or a Holy Day of Obligation through my own fault?',
                'Have I arrived deliberately late or left early without serious reason?',
                'Have I been distracted, irreverent, or talkative during Mass?',
                'Have I done unnecessary servile work on Sundays, neglecting rest and the worship of God?'
            ]
        },
        {
            commandment: 'IV',
            title: 'Honor your father and your mother',
            questions: [
                'Have I disobeyed, disrespected, or shown contempt for my parents?',
                'Have I neglected to care for them when they needed me?',
                'Have I been a faithful spouse — patient, kind, forgiving?',
                'Have I given proper time, formation, and discipline to my children? Brought them to Mass? Taught them to pray?',
                'Have I been a faithful citizen — obeying just laws, paying taxes, voting, working for justice?',
                'Have I shown proper respect to teachers, employers, the elderly, and Church authority?'
            ]
        },
        {
            commandment: 'V',
            title: 'You shall not kill',
            questions: [
                'Have I procured, advised, or supported abortion? Euthanasia?',
                'Have I deliberately harmed myself? Considered suicide?',
                'Have I harbored hatred, lasting anger, or grudges?',
                'Have I been unjust, cruel, or violent toward others — in word, deed, or thought?',
                'Have I forgiven those who have hurt me, or refused to forgive?',
                'Have I led others into sin by my words, example, or scandal?',
                'Have I abused alcohol, drugs, food, or harmed my body through neglect?'
            ]
        },
        {
            commandment: 'VI',
            title: 'You shall not commit adultery',
            questions: [
                'Have I been chaste in thought, word, and deed according to my state in life?',
                'Have I willfully entertained impure thoughts or fantasies?',
                'Have I viewed pornography or impure media?',
                'Have I committed adultery, fornication, or any sexual sin?',
                'Have I used contraception or sterilized myself within marriage?',
                'Have I dressed or behaved immodestly?',
                'Have I respected the dignity of every person as made in God\'s image?'
            ]
        },
        {
            commandment: 'VII',
            title: 'You shall not steal',
            questions: [
                'Have I taken what does not belong to me?',
                'Have I cheated, defrauded, or been dishonest in business or schoolwork?',
                'Have I damaged the property of others or failed to make restitution?',
                'Have I given to the poor and supported the Church according to my means?',
                'Have I been wasteful or destructive of God\'s creation?'
            ]
        },
        {
            commandment: 'VIII',
            title: 'You shall not bear false witness against your neighbor',
            questions: [
                'Have I lied? Even small or "white" lies that injured someone?',
                'Have I damaged another\'s reputation by gossip, slander, or detraction (revealing true but private faults)?',
                'Have I judged others rashly?',
                'Have I betrayed a confidence?',
                'Have I been honest in my work and dealings?'
            ]
        },
        {
            commandment: 'IX',
            title: 'You shall not covet your neighbor\'s wife (or husband)',
            questions: [
                'Have I willfully desired what was forbidden to me?',
                'Have I cultivated romantic or sexual desires for someone other than my spouse?',
                'Have I treated others as objects rather than persons?'
            ]
        },
        {
            commandment: 'X',
            title: 'You shall not covet your neighbor\'s goods',
            questions: [
                'Have I been envious of others\' wealth, success, or status?',
                'Have I been greedy or attached to material things?',
                'Have I been thankful for what God has given me?',
                'Have I given a tithe of my goods to the Church and the poor?'
            ]
        },
        {
            commandment: '✦',
            title: 'The Precepts of the Church',
            questions: [
                'Have I attended Mass on Sundays and Holy Days of Obligation?',
                'Have I confessed my serious sins at least once a year?',
                'Have I received Holy Communion at least during the Easter season, in a state of grace?',
                'Have I observed the prescribed days of fasting and abstinence?',
                'Have I supported the Church through my time, treasure, and talents?'
            ]
        }
    ],
    actOfContrition: 'O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all because they offend Thee, my God, who art all-good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasions of sin. Amen.'
};

/* ── CHAPLETS ── */
const CHAPLETS = [
    {
        id: 'divine-mercy',
        name: 'Chaplet of Divine Mercy',
        latin: 'Corona Divinae Misericordiae',
        origin: 'Given to St. Faustina Kowalska in 1935. Approved for universal devotion.',
        beads: 'Rosary beads',
        opening: 'You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us. (3x)\n\nO Blood and Water, which gushed forth from the Heart of Jesus as a fountain of Mercy for us, I trust in You! (3x)',
        prayers: [
            { label: 'On the Our Father bead', text: 'Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world.' },
            { label: 'On the 10 Hail Mary beads', text: 'For the sake of His sorrowful Passion, have mercy on us and on the whole world.' }
        ],
        closing: 'Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world. (3x)\n\nJesus, I trust in You.'
    },
    {
        id: 'st-michael',
        name: 'Chaplet of St. Michael',
        latin: 'Corona Sancti Michaelis Archangeli',
        origin: 'Composed at the request of St. Michael himself, who appeared to the Servant of God Antonia d\'Astonac (1751).',
        beads: 'Nine sets honoring the Nine Choirs of Angels',
        opening: 'O God, come to my assistance. O Lord, make haste to help me. Glory be to the Father…',
        prayers: [
            { label: 'For each of the 9 choirs of angels', text: 'By the intercession of St. Michael and the celestial Choir of [Seraphim/Cherubim/Thrones/Dominations/Powers/Virtues/Principalities/Archangels/Angels], may the Lord make us worthy to [grace requested].' },
            { label: 'After each invocation', text: 'One Our Father and three Hail Marys.' }
        ],
        closing: 'Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the heavenly host, by the power of God, thrust into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.'
    },
    {
        id: 'holy-wounds',
        name: 'Chaplet of the Holy Wounds',
        latin: 'Corona Sacrorum Vulnerum',
        origin: 'Given to Sister Marie Martha Chambon (1841-1907), a Visitandine nun in Chambéry, France.',
        beads: 'Standard rosary beads',
        opening: 'O Jesus, Divine Redeemer, be merciful to us and to the whole world. Amen.\nStrong God, holy God, immortal God, have pity on us and on the whole world. Amen.\nMercy, my God, in the midst of Your wrath. Amen.\nO Jesus, extend Your mercy to us in this terrible moment. Amen.',
        prayers: [
            { label: 'On the large beads', text: 'Eternal Father, I offer Thee the Wounds of Our Lord Jesus Christ, to heal those of our souls.' },
            { label: 'On the small beads (10x)', text: 'My Jesus, pardon and mercy, through the merits of Thy Holy Wounds.' }
        ],
        closing: 'O Jesus, by Your sacred Wounds, the soul is washed; through them I receive grace and mercy. Have mercy on us. Amen.'
    },
    {
        id: 'st-jude',
        name: 'Chaplet of St. Jude',
        latin: 'Corona Sancti Iudae Thaddaei',
        origin: 'A devotion to the Apostle St. Jude Thaddeus, patron of impossible causes.',
        beads: 'A set of nine beads, prayed in groups of three',
        opening: 'O most holy Apostle, Saint Jude, faithful servant and friend of Jesus, the Church honors and invokes you universally as the patron of difficult cases, of things almost despaired of.',
        prayers: [
            { label: 'On each set of three beads', text: 'Pray for us, St. Jude, that we may be made worthy of the promises of Christ.' },
            { label: 'Then', text: 'St. Jude, glorious Apostle, faithful servant and friend of Jesus, intercede for me.' }
        ],
        closing: 'Saint Jude, help of the hopeless, pray for me. Three Glory Be\'s to the Most Holy Trinity.'
    }
];

if (typeof window !== 'undefined') {
    window.STATIONS = STATIONS;
    window.EXAMINATION = EXAMINATION;
    window.CHAPLETS = CHAPLETS;
}
