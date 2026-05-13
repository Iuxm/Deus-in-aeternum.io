/* ═══════════════════════════════════════════════════════════════
   THE HOLY ROSARY
   
   Complete data for all 20 Mysteries:
   - Joyful (Mondays & Saturdays)
   - Sorrowful (Tuesdays & Fridays)
   - Glorious (Wednesdays & Sundays)
   - Luminous (Thursdays)
   
   Each mystery includes:
   - Title and Latin name
   - Scripture reference and reading
   - Meditation drawn from Catholic tradition
   - Spiritual fruit (the grace traditionally requested)
   ═══════════════════════════════════════════════════════════════ */

const ROSARY = {

    /* How to Pray the Rosary — full step-by-step guide */
    guide: {
        title: 'How to Pray the Holy Rosary',
        steps: [
            { num: 1, title: 'Sign of the Cross & Apostles\' Creed', text: 'Make the Sign of the Cross while holding the crucifix, and pray the Apostles\' Creed.' },
            { num: 2, title: 'Our Father', text: 'On the first large bead, pray one Our Father.' },
            { num: 3, title: 'Three Hail Marys', text: 'On the next three small beads, pray three Hail Marys (for an increase of faith, hope, and charity).' },
            { num: 4, title: 'Glory Be', text: 'Pray the Glory Be on the chain or large bead.' },
            { num: 5, title: 'Announce the First Mystery', text: 'On the large bead, announce the First Mystery and pray one Our Father.' },
            { num: 6, title: 'Ten Hail Marys & Meditation', text: 'On each of the ten small beads, pray a Hail Mary while meditating on the mystery.' },
            { num: 7, title: 'Glory Be & Fatima Prayer', text: 'After the ten Hail Marys, pray the Glory Be, then the Fatima Prayer: "O my Jesus, forgive us our sins, save us from the fires of hell. Lead all souls to Heaven, especially those in most need of Thy mercy."' },
            { num: 8, title: 'Repeat for All Five Mysteries', text: 'Announce the next mystery and repeat steps 5–7. After praying all five mysteries, conclude with the Hail Holy Queen and the Sign of the Cross.' },
            { num: 9, title: 'Closing Prayer', text: 'Pray: "O God, whose only-begotten Son, by His life, death and resurrection, has purchased for us the rewards of eternal life, grant, we beseech Thee, that meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ Our Lord. Amen."' }
        ]
    },

    /* The schedule for which mysteries are prayed on which day */
    schedule: {
        Sun: 'glorious',    // (or joyful in Advent/Christmas)
        Mon: 'joyful',
        Tue: 'sorrowful',
        Wed: 'glorious',
        Thu: 'luminous',
        Fri: 'sorrowful',
        Sat: 'joyful'
    },

    /* ── THE JOYFUL MYSTERIES — Mysteria Gaudiosa ── */
    joyful: {
        name: 'The Joyful Mysteries',
        latin: 'Mysteria Gaudiosa',
        days: 'Mondays & Saturdays (and Sundays of Advent and Christmas)',
        intro: 'In the Joyful Mysteries we contemplate the dawn of our salvation — the beginnings of God\'s plan to redeem humanity through the Incarnation of His Son.',
        mysteries: [
            {
                num: 1,
                title: 'The Annunciation',
                latin: 'Annuntiatio Domini',
                scripture: 'Luke 1:26-38',
                reading: '"The angel Gabriel was sent from God to a town of Galilee called Nazareth, to a virgin betrothed to a man named Joseph... And the angel said to her, ‘Hail, full of grace, the Lord is with thee.’ Mary said, ‘Behold, I am the handmaid of the Lord. Let it be done to me according to thy word.’"',
                meditation: 'In the silence of Nazareth, the eternal Word becomes flesh. Mary\'s "fiat" — her humble yes — opens the door of salvation. She is the new Eve, undoing through obedience what Eve undid through disobedience.',
                fruit: 'Humility'
            },
            {
                num: 2,
                title: 'The Visitation',
                latin: 'Visitatio Mariae',
                scripture: 'Luke 1:39-56',
                reading: '"Mary set out and traveled to the hill country in haste to a town of Judah, where she entered the house of Zechariah and greeted Elizabeth... ‘Blessed are you who believed that what was spoken to you by the Lord would be fulfilled.’ My soul proclaims the greatness of the Lord."',
                meditation: 'Bearing Christ within her, Mary becomes the first Christian missionary. John the Baptist leaps in the womb at the presence of his Lord. Mary\'s Magnificat is the song of every soul that has tasted God\'s mercy.',
                fruit: 'Charity (love of neighbor)'
            },
            {
                num: 3,
                title: 'The Nativity of Our Lord',
                latin: 'Nativitas Domini',
                scripture: 'Luke 2:1-20',
                reading: '"While they were there, the time came for her to deliver, and she gave birth to her firstborn son. She wrapped him in swaddling clothes and laid him in a manger, because there was no room for them in the inn."',
                meditation: 'The Creator of the universe is born in a stable, wrapped in poverty, laid where animals feed. The shepherds — the lowly and the unwanted — are the first to adore. God has come down to us where we are.',
                fruit: 'Poverty of Spirit / Detachment from the World'
            },
            {
                num: 4,
                title: 'The Presentation in the Temple',
                latin: 'Praesentatio Domini',
                scripture: 'Luke 2:22-40',
                reading: '"They took him up to Jerusalem to present him to the Lord... Simeon took him into his arms and blessed God: ‘My eyes have seen your salvation, a light for revelation to the Gentiles, and glory for your people Israel.’ ‘And you yourself a sword will pierce, so that the thoughts of many hearts may be revealed.’"',
                meditation: 'Mary and Joseph fulfill the Law of Moses with the offering of the poor. Simeon and Anna, who have waited their whole lives, recognize the Messiah. The shadow of the Cross already falls upon Mary\'s heart.',
                fruit: 'Obedience'
            },
            {
                num: 5,
                title: 'The Finding of Jesus in the Temple',
                latin: 'Inventio Iesu in Templo',
                scripture: 'Luke 2:41-52',
                reading: '"After three days they found him in the temple, sitting in the midst of the teachers, listening to them and asking them questions... ‘Did you not know that I must be in my Father\'s house?’ He went down with them and was obedient to them. Mary kept all these things in her heart."',
                meditation: 'For three days he is "lost" — a foreshadowing of Holy Saturday. Even at twelve, his Father\'s business is his only concern. Yet he returns home and is obedient, sanctifying the hidden life of every Christian family.',
                fruit: 'Joy in Finding Jesus'
            }
        ]
    },

    /* ── THE SORROWFUL MYSTERIES — Mysteria Dolorosa ── */
    sorrowful: {
        name: 'The Sorrowful Mysteries',
        latin: 'Mysteria Dolorosa',
        days: 'Tuesdays & Fridays (and Sundays of Lent)',
        intro: 'In the Sorrowful Mysteries we walk with Christ along the Via Dolorosa — the Way of Sorrows — uniting our sufferings with His for the salvation of souls.',
        mysteries: [
            {
                num: 1,
                title: 'The Agony in the Garden',
                latin: 'Agonia in Horto',
                scripture: 'Matthew 26:36-46; Luke 22:39-46',
                reading: '"He withdrew about a stone\'s throw and knelt down. ‘Father, if thou art willing, remove this cup from me. Yet not my will, but thine, be done.’ His sweat became like great drops of blood falling down upon the ground."',
                meditation: 'In Gethsemane, the weight of every human sin presses upon the Heart of Jesus. He freely chooses our salvation. The Garden where Adam fell is undone in this Garden where the New Adam surrenders.',
                fruit: 'Sorrow for Sin / Conformity to God\'s Will'
            },
            {
                num: 2,
                title: 'The Scourging at the Pillar',
                latin: 'Flagellatio',
                scripture: 'Matthew 27:26; John 19:1',
                reading: '"Then Pilate took Jesus and had him scourged. By his stripes we are healed."',
                meditation: 'The pure Lamb of God is brutally beaten — a punishment reserved for slaves and rebels. Each lash reveals the cost of our sins; each wound becomes a fountain of healing for our souls and bodies.',
                fruit: 'Purity / Mortification of the Senses'
            },
            {
                num: 3,
                title: 'The Crowning with Thorns',
                latin: 'Coronatio Spinis',
                scripture: 'Matthew 27:27-31; John 19:2-3',
                reading: '"They wove a crown out of thorns and placed it on his head, and a reed in his right hand. And kneeling before him, they mocked him, saying, ‘Hail, King of the Jews!’"',
                meditation: 'The King of kings is mocked, the Crown of Heaven is replaced with a crown of thorns. He bears the contempt of the world for the sins of pride and disobedience that pierce his sacred head.',
                fruit: 'Moral Courage / Rejection of Pride'
            },
            {
                num: 4,
                title: 'The Carrying of the Cross',
                latin: 'Baiulatio Crucis',
                scripture: 'Luke 23:26-32; John 19:17',
                reading: '"He went out, bearing his own cross, to the place called The Place of a Skull... They forced Simon of Cyrene to carry his cross."',
                meditation: 'Beaten, bloodied, and exhausted, Jesus carries the instrument of his execution through the streets of Jerusalem. He meets his sorrowful Mother. He invites every disciple: "Take up your cross daily and follow me."',
                fruit: 'Patience in Suffering'
            },
            {
                num: 5,
                title: 'The Crucifixion and Death of Our Lord',
                latin: 'Crucifixio',
                scripture: 'Luke 23:33-46; John 19:25-30',
                reading: '"They crucified him there with the criminals, one on his right and one on his left. ‘Father, forgive them; they know not what they do.’ ‘Behold, your son... Behold, your mother.’ ‘It is finished.’ And bowing his head, he gave up his spirit."',
                meditation: 'On Calvary, the Son of God offers Himself as the perfect sacrifice. Mary stands at the foot of the Cross — the Mother of the Redeemer becomes the Mother of all the redeemed. By His death, death itself is conquered.',
                fruit: 'Final Perseverance / Salvation of Souls'
            }
        ]
    },

    /* ── THE GLORIOUS MYSTERIES — Mysteria Gloriosa ── */
    glorious: {
        name: 'The Glorious Mysteries',
        latin: 'Mysteria Gloriosa',
        days: 'Wednesdays & Sundays (Outside Advent, Christmas, Lent)',
        intro: 'In the Glorious Mysteries we celebrate the triumph of Christ — His victory over death, His ascension to glory, the birth of His Church, and the exaltation of His Mother.',
        mysteries: [
            {
                num: 1,
                title: 'The Resurrection',
                latin: 'Resurrectio Domini',
                scripture: 'Matthew 28:1-10; John 20:1-18',
                reading: '"He is not here, for he has been raised, just as he said. Come, see the place where he lay." Mary Magdalene saw the Lord and said, "Rabboni!" — which means Teacher.',
                meditation: 'Death is conquered; the gates of hell are broken. Christ rises in His glorified Body, the firstfruits of those who sleep. He shows His wounds — now glorified — as the eternal proof of His love.',
                fruit: 'Faith / The Hope of Resurrection'
            },
            {
                num: 2,
                title: 'The Ascension',
                latin: 'Ascensio Domini',
                scripture: 'Acts 1:6-11; Luke 24:50-53',
                reading: '"As they were looking on, he was lifted up, and a cloud took him out of their sight. ‘Behold, I am with you always, to the close of the age.’"',
                meditation: 'Forty days after Easter, Christ ascends to the right hand of the Father — taking our human nature into the heart of the Trinity. He is glorified, but He has not abandoned us. He prepares a place for us.',
                fruit: 'Hope / Desire for Heaven'
            },
            {
                num: 3,
                title: 'The Descent of the Holy Spirit',
                latin: 'Descensus Spiritus Sancti',
                scripture: 'Acts 2:1-13',
                reading: '"Suddenly there came from the sky a noise like a strong driving wind. Tongues as of fire appeared and came to rest on each one of them. They were all filled with the Holy Spirit."',
                meditation: 'Pentecost — the birthday of the Church. The Holy Spirit descends upon Mary and the Apostles, and what was once a frightened group huddled in the upper room now boldly proclaims the Gospel to the ends of the earth.',
                fruit: 'Wisdom / Love of God'
            },
            {
                num: 4,
                title: 'The Assumption of Mary',
                latin: 'Assumptio Mariae',
                scripture: 'Revelation 12:1; defined dogma — Munificentissimus Deus, 1950',
                reading: 'Pope Pius XII solemnly defined: "The Immaculate Mother of God, the ever Virgin Mary, having completed the course of her earthly life, was assumed body and soul into heavenly glory." (Cf. Rev 12:1: "A great sign appeared in heaven: a woman clothed with the sun.")',
                meditation: 'The Mother who gave Christ his body could not see her own body decay. Body and soul, she is taken up into heaven — the first fruit of the Resurrection promised to all who belong to Christ.',
                fruit: 'Devotion to Mary / Grace of a Happy Death'
            },
            {
                num: 5,
                title: 'The Coronation of Mary as Queen of Heaven',
                latin: 'Coronatio Mariae',
                scripture: 'Revelation 12:1; Lumen Gentium 59',
                reading: '"And on her head a crown of twelve stars." The Mother of the King is the Queen Mother. Mary intercedes for the Church and for all the children entrusted to her at the foot of the Cross.',
                meditation: 'Crowned by her Son as Queen of Heaven and Earth, Mary now reigns alongside Christ — not as a goddess, but as the most exalted of creatures, our Mother and Advocate. She is the masterpiece of God\'s grace.',
                fruit: 'Trust in Mary\'s Intercession / Perseverance in Grace'
            }
        ]
    },

    /* ── THE LUMINOUS MYSTERIES — Mysteria Luminosa ── */
    /* Added by St. John Paul II in his apostolic letter Rosarium Virginis Mariae (October 16, 2002) */
    luminous: {
        name: 'The Luminous Mysteries (The Mysteries of Light)',
        latin: 'Mysteria Luminosa',
        days: 'Thursdays',
        intro: 'Given to the Church by St. John Paul II in 2002, the Luminous Mysteries illumine Christ\'s public ministry — five moments of light that reveal His messianic mission.',
        mysteries: [
            {
                num: 1,
                title: 'The Baptism of Jesus in the Jordan',
                latin: 'Baptismus Iesu in Iordane',
                scripture: 'Matthew 3:13-17',
                reading: '"As Jesus was coming up out of the water, behold, the heavens were opened, and he saw the Spirit of God descending like a dove and resting upon him. A voice from the heavens said: ‘This is my beloved Son, with whom I am well pleased.’"',
                meditation: 'In the waters of the Jordan, Jesus — though sinless — stands among sinners. The Trinity is manifest: the Father speaks, the Son is anointed, the Spirit descends. Christ inaugurates his public ministry, and Christian baptism is foreshadowed.',
                fruit: 'Openness to the Holy Spirit'
            },
            {
                num: 2,
                title: 'The Wedding Feast at Cana',
                latin: 'Conversio Aquae in Vinum',
                scripture: 'John 2:1-12',
                reading: '"There was a wedding at Cana in Galilee, and the mother of Jesus was there. ‘Do whatever he tells you,’ she said to the servants. Jesus said, ‘Fill the jars with water.’ He turned the water into wine. Thus he revealed his glory, and his disciples began to believe in him."',
                meditation: 'The first sign at Cana points forward to the Eucharist and to the wedding feast of the Lamb. Mary intercedes — she sees the need, she trusts her Son, she gives the eternal counsel: "Do whatever he tells you."',
                fruit: 'Fidelity to Mary\'s Intercession / Trust in Christ'
            },
            {
                num: 3,
                title: 'The Proclamation of the Kingdom of God',
                latin: 'Proclamatio Regni Dei',
                scripture: 'Mark 1:14-15; Matthew 5-7',
                reading: '"Jesus came into Galilee, preaching the Gospel of God: ‘The time is fulfilled, and the Kingdom of God is at hand. Repent, and believe in the Gospel.’" He proclaimed the Beatitudes: "Blessed are the poor in spirit, for theirs is the Kingdom of heaven."',
                meditation: 'Jesus calls all peoples to conversion and forgiveness of sins. The Kingdom is among us — wherever Christ is received in faith and love. The Sermon on the Mount maps out the path of holiness for every Christian.',
                fruit: 'Repentance / Trust in God'
            },
            {
                num: 4,
                title: 'The Transfiguration',
                latin: 'Transfiguratio Domini',
                scripture: 'Matthew 17:1-9',
                reading: '"He was transfigured before them; his face shone like the sun and his clothes became white as light. Moses and Elijah appeared to them, conversing with him. From the cloud came a voice: ‘This is my beloved Son... listen to him.’"',
                meditation: 'On Mount Tabor the divinity of Christ shines through his humanity. He prepares the Apostles for the scandal of the Cross by giving them a glimpse of the glory that will follow. Heaven and earth, the Old Covenant and the New, are united in Him.',
                fruit: 'Desire for Holiness'
            },
            {
                num: 5,
                title: 'The Institution of the Holy Eucharist',
                latin: 'Institutio Eucharistiae',
                scripture: 'Matthew 26:26-30; 1 Corinthians 11:23-26',
                reading: '"While they were eating, Jesus took bread, said the blessing, broke it, and giving it to his disciples said, ‘Take and eat; this is my body.’ Then he took a cup, gave thanks, and gave it to them, saying, ‘Drink from it, all of you, for this is my blood of the covenant.’"',
                meditation: 'On the night before he died, Christ instituted the sacrament of his Body and Blood — the source and summit of the Christian life. The Eucharist is no symbol; it is Christ himself, given to us as food for the journey home.',
                fruit: 'Active Participation in the Mass / Eucharistic Adoration'
            }
        ]
    }
};

if (typeof window !== 'undefined') window.ROSARY = ROSARY;
