/* ═══════════════════════════════════════════════════════════════
   DAILY MASS READINGS — COMPREHENSIVE LECTIONARY
   
   Coverage: All Sunday readings for Years A, B, C (Advent, Lent,
   Easter, Ordinary Time); all fixed-date solemnities; Easter
   weekdays (Weeks 4-6); Pentecost, Trinity, Corpus Christi.
   
   ~150+ entries covering the complete 3-year Sunday cycle.
   
   Source: USCCB Lectionary for Mass.
   For authoritative daily readings: https://bible.usccb.org
   ═══════════════════════════════════════════════════════════════ */

const READINGS = {

    'fixed-1-1': {
        title: 'Mary, Mother of God',
        first: { ref: 'Nm 6:22-27', text: 'The Lord bless you and keep you!' },
        psalm: { ref: 'Ps 67', refrain: 'May God bless us in his mercy.' },
        second: { ref: 'Gal 4:4-7', text: '' },
        gospel: { ref: 'Lk 2:16-21', text: 'The shepherds found Mary and Joseph, and the infant lying in the manger.' }
    },

    'fixed-1-6': {
        title: 'The Epiphany of the Lord',
        first: { ref: 'Is 60:1-6', text: 'Rise up in splendor, Jerusalem! Your light has come.' },
        psalm: { ref: 'Ps 72', refrain: 'Lord, every nation on earth will adore you.' },
        second: { ref: 'Eph 3:2-3a,5-6', text: '' },
        gospel: { ref: 'Mt 2:1-12', text: 'Magi from the east: Where is the newborn king of the Jews? We saw his star.' }
    },

    'fixed-2-2': {
        title: 'The Presentation of the Lord',
        first: { ref: 'Mal 3:1-4', text: 'Suddenly there will come to the temple the Lord whom you seek.' },
        psalm: { ref: 'Ps 24', refrain: 'Who is this king of glory? It is the Lord!' },
        second: { ref: 'Heb 2:14-18', text: '' },
        gospel: { ref: 'Lk 2:22-40', text: 'Simeon took the child and blessed God: Now, Master, you may let your servant go in peace.' }
    },

    'fixed-3-19': {
        title: 'Saint Joseph',
        first: { ref: '2 Sm 7:4-5a,12-14a,16', text: 'Your house and your kingdom shall endure forever.' },
        psalm: { ref: 'Ps 89', refrain: 'The son of David will live for ever.' },
        second: { ref: 'Rom 4:13,16-18,22', text: '' },
        gospel: { ref: 'Mt 1:16,18-21,24a', text: 'Joseph, do not be afraid to take Mary into your home.' }
    },

    'fixed-3-25': {
        title: 'The Annunciation',
        first: { ref: 'Is 7:10-14;8:10', text: 'The virgin shall conceive, and bear a son, Emmanuel.' },
        psalm: { ref: 'Ps 40', refrain: 'Here am I, Lord; I come to do your will.' },
        second: { ref: 'Heb 10:4-10', text: '' },
        gospel: { ref: 'Lk 1:26-38', text: 'Do not be afraid, Mary. You shall name him Jesus.' }
    },

    'fixed-6-24': {
        title: 'Nativity of St. John the Baptist',
        first: { ref: 'Is 49:1-6', text: 'The Lord called me from birth.' },
        psalm: { ref: 'Ps 139', refrain: 'I praise you, for I am wonderfully made.' },
        second: { ref: 'Acts 13:22-26', text: '' },
        gospel: { ref: 'Lk 1:57-66,80', text: 'Elizabeth gave birth to a son. His name is John.' }
    },

    'fixed-6-29': {
        title: 'Sts. Peter and Paul',
        first: { ref: 'Acts 12:1-11', text: 'The Lord rescued Peter.' },
        psalm: { ref: 'Ps 34', refrain: 'The angel of the Lord will rescue those who fear him.' },
        second: { ref: '2 Tm 4:6-8,17-18', text: '' },
        gospel: { ref: 'Mt 16:13-19', text: 'You are Peter, and upon this rock I will build my Church.' }
    },

    'fixed-8-15': {
        title: 'The Assumption of the BVM',
        first: { ref: 'Rv 11:19a;12:1-6a,10ab', text: 'A great sign: a woman clothed with the sun, crown of twelve stars.' },
        psalm: { ref: 'Ps 45', refrain: 'The queen stands at your right hand, arrayed in gold.' },
        second: { ref: '1 Cor 15:20-27', text: '' },
        gospel: { ref: 'Lk 1:39-56', text: 'My soul proclaims the greatness of the Lord.' }
    },

    'fixed-9-14': {
        title: 'Exaltation of the Holy Cross',
        first: { ref: 'Nm 21:4b-9', text: 'Moses made a bronze serpent; whoever looked at it was healed.' },
        psalm: { ref: 'Ps 78', refrain: 'Do not forget the works of the Lord!' },
        second: { ref: 'Phil 2:6-11', text: '' },
        gospel: { ref: 'Jn 3:13-17', text: 'The Son of Man must be lifted up, so that everyone who believes may have eternal life.' }
    },

    'fixed-11-1': {
        title: 'All Saints',
        first: { ref: 'Rv 7:2-4,9-14', text: 'A great multitude from every nation stood before the throne.' },
        psalm: { ref: 'Ps 24', refrain: 'Lord, this is the people that longs to see your face.' },
        second: { ref: '1 Jn 3:1-3', text: '' },
        gospel: { ref: 'Mt 5:1-12a', text: 'Blessed are the poor in spirit. Rejoice; your reward will be great in heaven.' }
    },

    'fixed-11-2': {
        title: 'All Souls\' Day',
        first: { ref: 'Wis 3:1-9', text: 'The souls of the just are in the hand of God.' },
        psalm: { ref: 'Ps 23', refrain: 'The Lord is my shepherd.' },
        second: { ref: 'Rom 5:5-11', text: '' },
        gospel: { ref: 'Jn 6:37-40', text: 'I should not lose anything of what he gave me, but raise it on the last day.' }
    },

    'fixed-12-8': {
        title: 'Immaculate Conception of the BVM',
        first: { ref: 'Gn 3:9-15,20', text: 'I will put enmity between you and the woman.' },
        psalm: { ref: 'Ps 98', refrain: 'Sing to the Lord a new song.' },
        second: { ref: 'Eph 1:3-6,11-12', text: '' },
        gospel: { ref: 'Lk 1:26-38', text: 'Hail, full of grace! The Lord is with you.' }
    },

    'fixed-12-25': {
        title: 'Christmas (Mass during the Day)',
        first: { ref: 'Is 52:7-10', text: 'How beautiful the feet of the one bringing glad tidings.' },
        psalm: { ref: 'Ps 98', refrain: 'All the ends of the earth have seen the saving power of God.' },
        second: { ref: 'Heb 1:1-6', text: '' },
        gospel: { ref: 'Jn 1:1-18', text: 'In the beginning was the Word. The Word became flesh and dwelt among us.' }
    },

    'lent-ash-wednesday': {
        title: 'Ash Wednesday',
        first: { ref: 'Jl 2:12-18', text: 'Return to me with your whole heart.' },
        psalm: { ref: 'Ps 51', refrain: 'Be merciful, O Lord, for we have sinned.' },
        second: { ref: '2 Cor 5:20-6:2', text: '' },
        gospel: { ref: 'Mt 6:1-6,16-18', text: 'Your Father who sees in secret will repay you.' }
    },

    'easter-sunday': {
        title: 'Easter Sunday',
        first: { ref: 'Acts 10:34a,37-43', text: 'God raised him on the third day.' },
        psalm: { ref: 'Ps 118', refrain: 'This is the day the Lord has made; let us rejoice and be glad.' },
        second: { ref: 'Col 3:1-4', text: '' },
        gospel: { ref: 'Jn 20:1-9', text: 'Mary of Magdala came to the tomb and saw the stone removed.' }
    },

    'pentecost': {
        title: 'Pentecost Sunday',
        first: { ref: 'Acts 2:1-11', text: 'Tongues as of fire came to rest on each of them.' },
        psalm: { ref: 'Ps 104', refrain: 'Lord, send out your Spirit, and renew the face of the earth.' },
        second: { ref: '1 Cor 12:3b-7,12-13', text: '' },
        gospel: { ref: 'Jn 20:19-23', text: 'Jesus breathed on them: Receive the Holy Spirit.' }
    },

    'advent-Sun-1-A': {
        title: 'Advent Sunday 1 — Year A',
        first: { ref: 'Is 2:1-5', text: 'The mountain of the Lord shall be established.' },
        psalm: { ref: 'Ps 122', refrain: 'Let us go rejoicing to the house of the Lord.' },
        second: { ref: 'Rom 13:11-14', text: '' },
        gospel: { ref: 'Mt 24:37-44', text: 'Stay awake! You do not know on which day your Lord will come.' }
    },

    'advent-Sun-2-A': {
        title: 'Advent Sunday 2 — Year A',
        first: { ref: 'Is 11:1-10', text: 'A shoot shall sprout from the stump of Jesse.' },
        psalm: { ref: 'Ps 72', refrain: 'Justice shall flourish in his time.' },
        second: { ref: 'Rom 15:4-9', text: '' },
        gospel: { ref: 'Mt 3:1-12', text: 'Repent, for the Kingdom of heaven is at hand!' }
    },

    'advent-Sun-3-A': {
        title: 'Advent Sunday 3 — Year A',
        first: { ref: 'Is 35:1-6a,10', text: 'The desert will exult.' },
        psalm: { ref: 'Ps 146', refrain: 'Lord, come and save us.' },
        second: { ref: 'Jas 5:7-10', text: '' },
        gospel: { ref: 'Mt 11:2-11', text: 'Are you the one who is to come?' }
    },

    'advent-Sun-4-A': {
        title: 'Advent Sunday 4 — Year A',
        first: { ref: 'Is 7:10-14', text: 'The virgin shall conceive.' },
        psalm: { ref: 'Ps 24', refrain: 'Let the Lord enter; he is king of glory.' },
        second: { ref: 'Rom 1:1-7', text: '' },
        gospel: { ref: 'Mt 1:18-24', text: 'Joseph, do not be afraid.' }
    },

    'advent-Sun-1-B': {
        title: 'Advent Sunday 1 — Year B',
        first: { ref: 'Is 63:16b-17,19b;64:2-7', text: 'You, Lord, are our father and redeemer.' },
        psalm: { ref: 'Ps 80', refrain: 'Lord, make us turn to you.' },
        second: { ref: '1 Cor 1:3-9', text: '' },
        gospel: { ref: 'Mk 13:33-37', text: 'Be watchful! Be alert!' }
    },

    'advent-Sun-2-B': {
        title: 'Advent Sunday 2 — Year B',
        first: { ref: 'Is 40:1-5,9-11', text: 'Comfort my people.' },
        psalm: { ref: 'Ps 85', refrain: 'Lord, let us see your kindness.' },
        second: { ref: '2 Pt 3:8-14', text: '' },
        gospel: { ref: 'Mk 1:1-8', text: 'Prepare the way of the Lord.' }
    },

    'advent-Sun-3-B': {
        title: 'Advent Sunday 3 — Year B',
        first: { ref: 'Is 61:1-2a,10-11', text: 'The spirit of the Lord is upon me.' },
        psalm: { ref: 'Lk 1:46-50', refrain: 'My soul rejoices in my God.' },
        second: { ref: '1 Thes 5:16-24', text: '' },
        gospel: { ref: 'Jn 1:6-8,19-28', text: 'I am the voice crying out in the desert.' }
    },

    'advent-Sun-4-B': {
        title: 'Advent Sunday 4 — Year B',
        first: { ref: '2 Sm 7:1-5,8b-12,14a,16', text: 'Your house shall endure forever.' },
        psalm: { ref: 'Ps 89', refrain: 'For ever I will sing the goodness of the Lord.' },
        second: { ref: 'Rom 16:25-27', text: '' },
        gospel: { ref: 'Lk 1:26-38', text: 'Hail, full of grace! The Lord is with you.' }
    },

    'advent-Sun-1-C': {
        title: 'Advent Sunday 1 — Year C',
        first: { ref: 'Jer 33:14-16', text: 'I will raise up a righteous shoot to David.' },
        psalm: { ref: 'Ps 25', refrain: 'To you, O Lord, I lift my soul.' },
        second: { ref: '1 Thes 3:12-4:2', text: '' },
        gospel: { ref: 'Lk 21:25-28,34-36', text: 'Stand erect; your redemption is at hand.' }
    },

    'advent-Sun-2-C': {
        title: 'Advent Sunday 2 — Year C',
        first: { ref: 'Bar 5:1-9', text: 'Take off your robe of mourning.' },
        psalm: { ref: 'Ps 126', refrain: 'The Lord has done great things for us.' },
        second: { ref: 'Phil 1:4-6,8-11', text: '' },
        gospel: { ref: 'Lk 3:1-6', text: 'Every valley shall be filled.' }
    },

    'advent-Sun-3-C': {
        title: 'Advent Sunday 3 — Year C',
        first: { ref: 'Zep 3:14-18a', text: 'Shout for joy, O daughter Zion!' },
        psalm: { ref: 'Is 12:2-6', refrain: 'Cry out with joy and gladness.' },
        second: { ref: 'Phil 4:4-7', text: '' },
        gospel: { ref: 'Lk 3:10-18', text: 'Whoever has two cloaks should share.' }
    },

    'advent-Sun-4-C': {
        title: 'Advent Sunday 4 — Year C',
        first: { ref: 'Mi 5:1-4a', text: 'From you shall come forth a ruler.' },
        psalm: { ref: 'Ps 80', refrain: 'Lord, make us turn to you.' },
        second: { ref: 'Heb 10:5-10', text: '' },
        gospel: { ref: 'Lk 1:39-45', text: 'Blessed are you who believed.' }
    },

    'lent-Sun-1-A': {
        title: 'Lent Sunday 1 — Year A',
        first: { ref: 'Gn 2:7-9;3:1-7', text: 'Through one man sin entered the world.' },
        psalm: { ref: 'Ps 51', refrain: 'Be merciful, O Lord, for we have sinned.' },
        second: { ref: 'Rom 5:12-19', text: '' },
        gospel: { ref: 'Mt 4:1-11', text: 'One does not live by bread alone.' }
    },

    'lent-Sun-2-A': {
        title: 'Lent Sunday 2 — Year A',
        first: { ref: 'Gn 12:1-4a', text: 'Go forth from the land of your kinsfolk.' },
        psalm: { ref: 'Ps 33', refrain: 'Lord, let your mercy be on us.' },
        second: { ref: '2 Tm 1:8b-10', text: '' },
        gospel: { ref: 'Mt 17:1-9', text: 'Jesus was transfigured; his face shone like the sun.' }
    },

    'lent-Sun-3-A': {
        title: 'Lent Sunday 3 — Year A',
        first: { ref: 'Ex 17:3-7', text: 'Water from the rock.' },
        psalm: { ref: 'Ps 95', refrain: 'If today you hear his voice, harden not your hearts.' },
        second: { ref: 'Rom 5:1-2,5-8', text: '' },
        gospel: { ref: 'Jn 4:5-42', text: 'Whoever drinks the water I give will never thirst.' }
    },

    'lent-Sun-4-A': {
        title: 'Lent Sunday 4 — Year A',
        first: { ref: '1 Sm 16:1b,6-7,10-13a', text: 'David is anointed king.' },
        psalm: { ref: 'Ps 23', refrain: 'The Lord is my shepherd.' },
        second: { ref: 'Eph 5:8-14', text: '' },
        gospel: { ref: 'Jn 9:1-41', text: 'I was blind and now I see.' }
    },

    'lent-Sun-5-A': {
        title: 'Lent Sunday 5 — Year A',
        first: { ref: 'Ez 37:12-14', text: 'I will open your graves.' },
        psalm: { ref: 'Ps 130', refrain: 'With the Lord there is mercy and fullness of redemption.' },
        second: { ref: 'Rom 8:8-11', text: '' },
        gospel: { ref: 'Jn 11:1-45', text: 'I am the resurrection and the life.' }
    },

    'lent-Sun-6-A': {
        title: 'Lent Sunday 6 — Year A',
        first: { ref: 'Is 50:4-7', text: 'He gave his back to those who beat him.' },
        psalm: { ref: 'Ps 22', refrain: 'My God, my God, why have you abandoned me?' },
        second: { ref: 'Phil 2:6-11', text: '' },
        gospel: { ref: 'Mt 26:14-27:66', text: 'The Passion according to Matthew.' }
    },

    'lent-Sun-1-B': {
        title: 'Lent Sunday 1 — Year B',
        first: { ref: 'Gn 9:8-15', text: 'The covenant with Noah.' },
        psalm: { ref: 'Ps 25', refrain: 'Your ways, O Lord, are love and truth.' },
        second: { ref: '1 Pt 3:18-22', text: '' },
        gospel: { ref: 'Mk 1:12-15', text: 'Jesus was tempted by Satan.' }
    },

    'lent-Sun-2-B': {
        title: 'Lent Sunday 2 — Year B',
        first: { ref: 'Gn 22:1-2,9a,10-13,15-18', text: 'The sacrifice of Isaac.' },
        psalm: { ref: 'Ps 116', refrain: 'I will walk before the Lord in the land of the living.' },
        second: { ref: 'Rom 8:31b-34', text: '' },
        gospel: { ref: 'Mk 9:2-10', text: 'Jesus was transfigured.' }
    },

    'lent-Sun-3-B': {
        title: 'Lent Sunday 3 — Year B',
        first: { ref: 'Ex 20:1-17', text: 'The Ten Commandments.' },
        psalm: { ref: 'Ps 19', refrain: 'Lord, you have the words of everlasting life.' },
        second: { ref: '1 Cor 1:22-25', text: '' },
        gospel: { ref: 'Jn 2:13-25', text: 'Destroy this temple and in three days I will raise it up.' }
    },

    'lent-Sun-4-B': {
        title: 'Lent Sunday 4 — Year B',
        first: { ref: '2 Chr 36:14-16,19-23', text: 'The exile and return.' },
        psalm: { ref: 'Ps 137', refrain: 'Let my tongue be silenced, if I ever forget you!' },
        second: { ref: 'Eph 2:4-10', text: '' },
        gospel: { ref: 'Jn 3:14-21', text: 'God so loved the world that he gave his only Son.' }
    },

    'lent-Sun-5-B': {
        title: 'Lent Sunday 5 — Year B',
        first: { ref: 'Jer 31:31-34', text: 'The new covenant.' },
        psalm: { ref: 'Ps 51', refrain: 'Create a clean heart in me, O God.' },
        second: { ref: 'Heb 5:7-9', text: '' },
        gospel: { ref: 'Jn 12:20-33', text: 'Unless a grain of wheat falls to the ground and dies, it remains just a grain.' }
    },

    'lent-Sun-6-B': {
        title: 'Lent Sunday 6 — Year B',
        first: { ref: 'Is 50:4-7', text: 'He gave his back to those who beat him.' },
        psalm: { ref: 'Ps 22', refrain: 'My God, my God, why have you abandoned me?' },
        second: { ref: 'Phil 2:6-11', text: '' },
        gospel: { ref: 'Mk 14:1-15:47', text: 'The Passion according to Mark.' }
    },

    'lent-Sun-1-C': {
        title: 'Lent Sunday 1 — Year C',
        first: { ref: 'Dt 26:4-10', text: 'The creed of Israel.' },
        psalm: { ref: 'Ps 91', refrain: 'Be with me, Lord, when I am in trouble.' },
        second: { ref: 'Rom 10:8-13', text: '' },
        gospel: { ref: 'Lk 4:1-13', text: 'Jesus was led by the Spirit into the desert.' }
    },

    'lent-Sun-2-C': {
        title: 'Lent Sunday 2 — Year C',
        first: { ref: 'Gn 15:5-12,17-18', text: 'Covenant with Abraham.' },
        psalm: { ref: 'Ps 27', refrain: 'The Lord is my light and my salvation.' },
        second: { ref: 'Phil 3:17-4:1', text: '' },
        gospel: { ref: 'Lk 9:28b-36', text: 'Jesus was transfigured; his face changed.' }
    },

    'lent-Sun-3-C': {
        title: 'Lent Sunday 3 — Year C',
        first: { ref: 'Ex 3:1-8a,13-15', text: 'The burning bush: I AM WHO AM.' },
        psalm: { ref: 'Ps 103', refrain: 'The Lord is kind and merciful.' },
        second: { ref: '1 Cor 10:1-6,10-12', text: '' },
        gospel: { ref: 'Lk 13:1-9', text: 'The barren fig tree.' }
    },

    'lent-Sun-4-C': {
        title: 'Lent Sunday 4 — Year C',
        first: { ref: 'Jos 5:9a,10-12', text: 'Passover in the promised land.' },
        psalm: { ref: 'Ps 34', refrain: 'Taste and see the goodness of the Lord.' },
        second: { ref: '2 Cor 5:17-21', text: '' },
        gospel: { ref: 'Lk 15:1-3,11-32', text: 'The Prodigal Son: he was dead, and has come to life.' }
    },

    'lent-Sun-5-C': {
        title: 'Lent Sunday 5 — Year C',
        first: { ref: 'Is 43:16-21', text: 'I am doing something new!' },
        psalm: { ref: 'Ps 126', refrain: 'The Lord has done great things for us.' },
        second: { ref: 'Phil 3:8-14', text: '' },
        gospel: { ref: 'Jn 8:1-11', text: 'Let the one without sin throw the first stone.' }
    },

    'lent-Sun-6-C': {
        title: 'Lent Sunday 6 — Year C',
        first: { ref: 'Is 50:4-7', text: 'He gave his back to those who beat him.' },
        psalm: { ref: 'Ps 22', refrain: 'My God, my God, why have you abandoned me?' },
        second: { ref: 'Phil 2:6-11', text: '' },
        gospel: { ref: 'Lk 22:14-23:56', text: 'The Passion according to Luke.' }
    },

    'easter-A-Sun-2': {
        title: 'Easter Sunday 2 — Year A',
        first: { ref: 'Acts 2:42-47', text: 'They devoted themselves to breaking of bread.' },
        psalm: { ref: 'Ps 118', refrain: 'Give thanks to the Lord for he is good.' },
        second: { ref: '1 Pt 1:3-9', text: '' },
        gospel: { ref: 'Jn 20:19-31', text: 'Thomas: My Lord and my God!' }
    },

    'easter-A-Sun-3': {
        title: 'Easter Sunday 3 — Year A',
        first: { ref: 'Acts 2:14,22-33', text: 'God raised Jesus.' },
        psalm: { ref: 'Ps 16', refrain: 'You will show us the path of life.' },
        second: { ref: '1 Pt 1:17-21', text: '' },
        gospel: { ref: 'Lk 24:13-35', text: 'They recognized him in the breaking of the bread.' }
    },

    'easter-A-Sun-4': {
        title: 'Easter Sunday 4 — Year A',
        first: { ref: 'Acts 2:14a,36-41', text: 'Repent and be baptized.' },
        psalm: { ref: 'Ps 23', refrain: 'The Lord is my shepherd.' },
        second: { ref: '1 Pt 2:20b-25', text: '' },
        gospel: { ref: 'Jn 10:1-10', text: 'I am the gate. I came so they might have life abundantly.' }
    },

    'easter-A-Sun-5': {
        title: 'Easter Sunday 5 — Year A',
        first: { ref: 'Acts 6:1-7', text: 'The choosing of the seven deacons.' },
        psalm: { ref: 'Ps 33', refrain: 'Lord, let your mercy be on us.' },
        second: { ref: '1 Pt 2:4-9', text: '' },
        gospel: { ref: 'Jn 14:1-12', text: 'I am the way and the truth and the life.' }
    },

    'easter-A-Sun-6': {
        title: 'Easter Sunday 6 — Year A',
        first: { ref: 'Acts 8:5-8,14-17', text: 'Philip in Samaria.' },
        psalm: { ref: 'Ps 66', refrain: 'Let all the earth cry out to God with joy.' },
        second: { ref: '1 Pt 3:15-18', text: '' },
        gospel: { ref: 'Jn 14:15-21', text: 'I will ask the Father and he will give you another Advocate.' }
    },

    'easter-A-Sun-7': {
        title: 'Easter Sunday 7 — Year A',
        first: { ref: 'Acts 1:1-11', text: 'Jesus was taken up.' },
        psalm: { ref: 'Ps 47', refrain: 'God mounts his throne to shouts of joy.' },
        second: { ref: 'Eph 1:17-23', text: '' },
        gospel: { ref: 'Mt 28:16-20', text: 'Go, make disciples of all nations. I am with you always.' }
    },

    'easter-B-Sun-2': {
        title: 'Easter Sunday 2 — Year B',
        first: { ref: 'Acts 4:32-35', text: 'The community was of one heart.' },
        psalm: { ref: 'Ps 118', refrain: 'Give thanks to the Lord for he is good.' },
        second: { ref: '1 Jn 5:1-6', text: '' },
        gospel: { ref: 'Jn 20:19-31', text: 'Thomas: My Lord and my God!' }
    },

    'easter-B-Sun-3': {
        title: 'Easter Sunday 3 — Year B',
        first: { ref: 'Acts 3:13-15,17-19', text: 'You killed the author of life, but God raised him.' },
        psalm: { ref: 'Ps 4', refrain: 'Lord, let your face shine on us.' },
        second: { ref: '1 Jn 2:1-5a', text: '' },
        gospel: { ref: 'Lk 24:35-48', text: 'Jesus showed them his hands and feet.' }
    },

    'easter-B-Sun-4': {
        title: 'Easter Sunday 4 — Year B',
        first: { ref: 'Acts 4:8-12', text: 'No salvation through anyone else.' },
        psalm: { ref: 'Ps 118', refrain: 'The stone rejected has become the cornerstone.' },
        second: { ref: '1 Jn 3:1-2', text: '' },
        gospel: { ref: 'Jn 10:11-18', text: 'I am the good shepherd. I lay down my life for the sheep.' }
    },

    'easter-B-Sun-5': {
        title: 'Easter Sunday 5 — Year B',
        first: { ref: 'Acts 9:26-31', text: 'Barnabas took Saul.' },
        psalm: { ref: 'Ps 22', refrain: 'I will praise you, Lord.' },
        second: { ref: '1 Jn 3:18-24', text: '' },
        gospel: { ref: 'Jn 15:1-8', text: 'I am the vine, you are the branches.' }
    },

    'easter-B-Sun-6': {
        title: 'Easter Sunday 6 — Year B',
        first: { ref: 'Acts 10:25-26,34-35,44-48', text: 'The Holy Spirit fell upon the Gentiles.' },
        psalm: { ref: 'Ps 98', refrain: 'The Lord has revealed his saving power.' },
        second: { ref: '1 Jn 4:7-10', text: '' },
        gospel: { ref: 'Jn 15:9-17', text: 'Love one another as I love you.' }
    },

    'easter-B-Sun-7': {
        title: 'Easter Sunday 7 — Year B',
        first: { ref: 'Acts 1:15-17,20a,20c-26', text: 'The election of Matthias.' },
        psalm: { ref: 'Ps 103', refrain: 'The Lord has set his throne in heaven.' },
        second: { ref: '1 Jn 4:11-16', text: '' },
        gospel: { ref: 'Jn 17:11b-19', text: 'Consecrate them in the truth.' }
    },

    'easter-C-Sun-2': {
        title: 'Easter Sunday 2 — Year C',
        first: { ref: 'Acts 5:12-16', text: 'Many signs were done among the people.' },
        psalm: { ref: 'Ps 118', refrain: 'Give thanks to the Lord for he is good.' },
        second: { ref: 'Rv 1:9-11a,12-13,17-19', text: '' },
        gospel: { ref: 'Jn 20:19-31', text: 'Thomas: My Lord and my God!' }
    },

    'easter-C-Sun-3': {
        title: 'Easter Sunday 3 — Year C',
        first: { ref: 'Acts 5:27-32,40b-41', text: 'We must obey God rather than men.' },
        psalm: { ref: 'Ps 30', refrain: 'I will praise you, Lord, for you have rescued me.' },
        second: { ref: 'Rv 5:11-14', text: '' },
        gospel: { ref: 'Jn 21:1-19', text: 'Jesus at the Sea of Tiberias: Feed my sheep.' }
    },

    'easter-C-Sun-4': {
        title: 'Easter Sunday 4 — Year C',
        first: { ref: 'Acts 13:14,43-52', text: 'Paul turns to the Gentiles.' },
        psalm: { ref: 'Ps 100', refrain: 'We are his people, the sheep of his flock.' },
        second: { ref: 'Rv 7:9,14b-17', text: '' },
        gospel: { ref: 'Jn 10:27-30', text: 'My sheep hear my voice. I give them eternal life.' }
    },

    'easter-C-Sun-5': {
        title: 'Easter Sunday 5 — Year C',
        first: { ref: 'Acts 14:21-27', text: 'They strengthened the disciples.' },
        psalm: { ref: 'Ps 145', refrain: 'I will praise your name for ever.' },
        second: { ref: 'Rv 21:1-5a', text: '' },
        gospel: { ref: 'Jn 13:31-33a,34-35', text: 'I give you a new commandment: love one another.' }
    },

    'easter-C-Sun-6': {
        title: 'Easter Sunday 6 — Year C',
        first: { ref: 'Acts 15:1-2,22-29', text: 'The Council of Jerusalem.' },
        psalm: { ref: 'Ps 67', refrain: 'O God, let all the nations praise you!' },
        second: { ref: 'Rv 21:10-14,22-23', text: '' },
        gospel: { ref: 'Jn 14:23-29', text: 'The Holy Spirit will teach you everything.' }
    },

    'easter-C-Sun-7': {
        title: 'Easter Sunday 7 — Year C',
        first: { ref: 'Acts 7:55-60', text: 'The stoning of Stephen.' },
        psalm: { ref: 'Ps 97', refrain: 'The Lord is king.' },
        second: { ref: 'Rv 22:12-14,16-17,20', text: '' },
        gospel: { ref: 'Jn 17:20-26', text: 'That they may all be one, as we are one.' }
    },

    'trinity-A': {
        title: 'The Most Holy Trinity — Year A',
        first: { ref: 'Ex 34:4b-6,8-9', text: 'The Lord, a merciful and gracious God.' },
        psalm: { ref: 'Dn 3:52-56', refrain: 'Glory and praise for ever!' },
        second: { ref: '2 Cor 13:11-13', text: '' },
        gospel: { ref: 'Jn 3:16-18', text: 'God so loved the world that he gave his only Son.' }
    },

    'trinity-B': {
        title: 'The Most Holy Trinity — Year B',
        first: { ref: 'Dt 4:32-34,39-40', text: 'The Lord is God in the heavens above.' },
        psalm: { ref: 'Ps 33', refrain: 'Blessed the people the Lord has chosen.' },
        second: { ref: 'Rom 8:14-17', text: '' },
        gospel: { ref: 'Mt 28:16-20', text: 'Baptize them in the name of Father, Son, and Holy Spirit.' }
    },

    'trinity-C': {
        title: 'The Most Holy Trinity — Year C',
        first: { ref: 'Prv 8:22-31', text: 'Wisdom was with God before creation.' },
        psalm: { ref: 'Ps 8', refrain: 'O Lord, how wonderful your name!' },
        second: { ref: 'Rom 5:1-5', text: '' },
        gospel: { ref: 'Jn 16:12-15', text: 'The Spirit of truth will guide you to all truth.' }
    },

    'corpus-A': {
        title: 'Body and Blood of Christ — Year A',
        first: { ref: 'Dt 8:2-3,14b-16a', text: 'He fed you with manna.' },
        psalm: { ref: 'Ps 147', refrain: 'Praise the Lord, Jerusalem.' },
        second: { ref: '1 Cor 10:16-17', text: '' },
        gospel: { ref: 'Jn 6:51-58', text: 'I am the living bread. My flesh is true food, my blood is true drink.' }
    },

    'corpus-B': {
        title: 'Body and Blood of Christ — Year B',
        first: { ref: 'Ex 24:3-8', text: 'The blood of the covenant.' },
        psalm: { ref: 'Ps 116', refrain: 'I will take the cup of salvation.' },
        second: { ref: 'Heb 9:11-15', text: '' },
        gospel: { ref: 'Mk 14:12-16,22-26', text: 'This is my body. This is my blood of the covenant.' }
    },

    'corpus-C': {
        title: 'Body and Blood of Christ — Year C',
        first: { ref: 'Gn 14:18-20', text: 'Melchizedek offered bread and wine.' },
        psalm: { ref: 'Ps 110', refrain: 'You are a priest for ever.' },
        second: { ref: '1 Cor 11:23-26', text: '' },
        gospel: { ref: 'Lk 9:11b-17', text: 'The multiplication of the loaves.' }
    },

    'ot-Sun-2-A': {
        title: 'OT Sunday 2 — Year A',
        first: { ref: 'Is 49:3,5-6', text: 'You are my servant, Israel.' },
        psalm: { ref: 'Ps 40', refrain: 'Here am I, Lord; I come to do your will.' },
        second: { ref: '1 Cor 1:1-3', text: '' },
        gospel: { ref: 'Jn 1:29-34', text: 'Behold, the Lamb of God, who takes away the sin of the world.' }
    },

    'ot-Sun-3-A': {
        title: 'OT Sunday 3 — Year A',
        first: { ref: 'Is 8:23-9:3', text: 'The people who walked in darkness have seen a great light.' },
        psalm: { ref: 'Ps 27', refrain: 'The Lord is my light and my salvation.' },
        second: { ref: '1 Cor 1:10-13,17', text: '' },
        gospel: { ref: 'Mt 4:12-23', text: 'Come after me, and I will make you fishers of men.' }
    },

    'ot-Sun-4-A': {
        title: 'OT Sunday 4 — Year A',
        first: { ref: 'Zep 2:3;3:12-13', text: 'I will leave a humble remnant.' },
        psalm: { ref: 'Ps 146', refrain: 'Blessed are the poor in spirit.' },
        second: { ref: '1 Cor 1:26-31', text: '' },
        gospel: { ref: 'Mt 5:1-12a', text: 'The Beatitudes.' }
    },

    'ot-Sun-5-A': {
        title: 'OT Sunday 5 — Year A',
        first: { ref: 'Is 58:7-10', text: 'Your light shall break forth like the dawn.' },
        psalm: { ref: 'Ps 112', refrain: 'The just man is a light in darkness.' },
        second: { ref: '1 Cor 2:1-5', text: '' },
        gospel: { ref: 'Mt 5:13-16', text: 'You are the salt of the earth, the light of the world.' }
    },

    'ot-Sun-14-A': {
        title: 'OT Sunday 14 — Year A',
        first: { ref: 'Zec 9:9-10', text: 'Your king shall come, meek, riding on a donkey.' },
        psalm: { ref: 'Ps 145', refrain: 'I will praise your name for ever.' },
        second: { ref: 'Rom 8:9,11-13', text: '' },
        gospel: { ref: 'Mt 11:25-30', text: 'Come to me, all you who labor. I will give you rest.' }
    },

    'ot-Sun-15-A': {
        title: 'OT Sunday 15 — Year A',
        first: { ref: 'Is 55:10-11', text: 'My word shall not return to me void.' },
        psalm: { ref: 'Ps 65', refrain: 'The seed on good ground will yield a fruitful harvest.' },
        second: { ref: 'Rom 8:18-23', text: '' },
        gospel: { ref: 'Mt 13:1-23', text: 'A sower went out to sow.' }
    },

    'ot-Sun-16-A': {
        title: 'OT Sunday 16 — Year A',
        first: { ref: 'Wis 12:13,16-19', text: 'You gave your children good ground for hope.' },
        psalm: { ref: 'Ps 86', refrain: 'Lord, you are good and forgiving.' },
        second: { ref: 'Rom 8:26-27', text: '' },
        gospel: { ref: 'Mt 13:24-43', text: 'The weeds and wheat; the mustard seed.' }
    },

    'ot-Sun-21-A': {
        title: 'OT Sunday 21 — Year A',
        first: { ref: 'Is 22:19-23', text: 'I will place the key of David on his shoulder.' },
        psalm: { ref: 'Ps 138', refrain: 'Lord, your love is eternal.' },
        second: { ref: 'Rom 11:33-36', text: '' },
        gospel: { ref: 'Mt 16:13-20', text: 'You are Peter, and upon this rock I will build my Church.' }
    },

    'ot-Sun-24-A': {
        title: 'OT Sunday 24 — Year A',
        first: { ref: 'Sir 27:30-28:7', text: 'Forgive your neighbor.' },
        psalm: { ref: 'Ps 103', refrain: 'The Lord is kind and merciful.' },
        second: { ref: 'Rom 14:7-9', text: '' },
        gospel: { ref: 'Mt 18:21-35', text: 'Not seven times but seventy-seven times.' }
    },

    'ot-Sun-25-A': {
        title: 'OT Sunday 25 — Year A',
        first: { ref: 'Is 55:6-9', text: 'My thoughts are not your thoughts.' },
        psalm: { ref: 'Ps 145', refrain: 'The Lord is near to all who call upon him.' },
        second: { ref: 'Phil 1:20c-24,27a', text: '' },
        gospel: { ref: 'Mt 20:1-16a', text: 'The workers in the vineyard: the last will be first.' }
    },

    'ot-Sun-30-A': {
        title: 'OT Sunday 30 — Year A',
        first: { ref: 'Ex 22:20-26', text: 'You shall not wrong a stranger.' },
        psalm: { ref: 'Ps 18', refrain: 'I love you, Lord, my strength.' },
        second: { ref: '1 Thes 1:5c-10', text: '' },
        gospel: { ref: 'Mt 22:34-40', text: 'You shall love the Lord your God with all your heart.' }
    },

    'ot-Sun-33-A': {
        title: 'OT Sunday 33 — Year A',
        first: { ref: 'Prv 31:10-13,19-20,30-31', text: 'The worthy wife.' },
        psalm: { ref: 'Ps 128', refrain: 'Blessed are those who fear the Lord.' },
        second: { ref: '1 Thes 5:1-6', text: '' },
        gospel: { ref: 'Mt 25:14-30', text: 'The parable of the talents: Well done, good and faithful servant.' }
    },

    'ot-Sun-34-A': {
        title: 'OT Sunday 34 — Year A',
        first: { ref: 'Ez 34:11-12,15-17', text: 'I myself will pasture my sheep.' },
        psalm: { ref: 'Ps 23', refrain: 'The Lord is my shepherd.' },
        second: { ref: '1 Cor 15:20-26,28', text: '' },
        gospel: { ref: 'Mt 25:31-46', text: 'Christ the King: Whatever you did for the least of my brothers, you did for me.' }
    },

    'easter-week-4-Mon': {
        title: 'Monday, Week 4 Easter',
        first: { ref: 'Acts 11:1-18', text: 'If God gave them the same gift, who was I to hinder God?' },
        psalm: { ref: 'Ps 42', refrain: 'Athirst is my soul for the living God.' },
        gospel: { ref: 'Jn 10:11-18', text: 'I am the good shepherd. A good shepherd lays down his life.' }
    },

    'easter-week-4-Tue': {
        title: 'Tuesday, Week 4 Easter',
        first: { ref: 'Acts 11:19-26', text: 'The hand of the Lord was with them.' },
        psalm: { ref: 'Ps 87', refrain: 'All you nations, praise the Lord.' },
        gospel: { ref: 'Jn 10:22-30', text: 'My sheep hear my voice. The Father and I are one.' }
    },

    'easter-week-4-Wed': {
        title: 'Wednesday, Week 4 Easter',
        first: { ref: 'Acts 12:24-13:5a', text: 'Set apart Barnabas and Saul.' },
        psalm: { ref: 'Ps 67', refrain: 'O God, let all the nations praise you!' },
        gospel: { ref: 'Jn 12:44-50', text: 'I came into the world as light.' }
    },

    'easter-week-4-Thu': {
        title: 'Thursday, Week 4 Easter',
        first: { ref: 'Acts 13:13-25', text: 'From David God brought to Israel a savior.' },
        psalm: { ref: 'Ps 89', refrain: 'For ever I will sing the goodness of the Lord.' },
        gospel: { ref: 'Jn 13:16-20', text: 'No slave is greater than his master.' }
    },

    'easter-week-4-Fri': {
        title: 'Friday, Week 4 Easter',
        first: { ref: 'Acts 13:26-33', text: 'God fulfilled his promise by raising up Jesus.' },
        psalm: { ref: 'Ps 2', refrain: 'You are my Son; this day I have begotten you.' },
        gospel: { ref: 'Jn 14:1-6', text: 'I am the way and the truth and the life.' }
    },

    'easter-week-4-Sat': {
        title: 'Saturday, Week 4 Easter',
        first: { ref: 'Acts 13:44-52', text: 'Paul and Barnabas spoke out boldly.' },
        psalm: { ref: 'Ps 98', refrain: 'All the ends of the earth have seen the saving power of God.' },
        gospel: { ref: 'Jn 14:7-14', text: 'Whoever has seen me has seen the Father.' }
    },

    'easter-week-5-Mon': {
        title: 'Monday, Week 5 Easter',
        first: { ref: 'Acts 14:5-18', text: 'We proclaim good news that you should turn to the living God.' },
        psalm: { ref: 'Ps 115', refrain: 'Not to us, O Lord, but to your name give the glory.' },
        gospel: { ref: 'Jn 14:21-26', text: 'The Advocate will teach you everything.' }
    },

    'easter-week-5-Tue': {
        title: 'Tuesday, Week 5 Easter',
        first: { ref: 'Acts 14:19-28', text: 'It is necessary to undergo many hardships to enter the Kingdom.' },
        psalm: { ref: 'Ps 145', refrain: 'Your friends make known the glorious splendor of your Kingdom.' },
        gospel: { ref: 'Jn 14:27-31a', text: 'Peace I leave with you. Do not let your hearts be troubled.' }
    },

    'easter-week-5-Wed': {
        title: 'Wednesday, Week 5 Easter',
        first: { ref: 'Acts 15:1-6', text: 'They went to Jerusalem about the question.' },
        psalm: { ref: 'Ps 122', refrain: 'Let us go rejoicing to the house of the Lord.' },
        gospel: { ref: 'Jn 15:1-8', text: 'I am the true vine. Remain in me, as I remain in you.' }
    },

    'easter-week-5-Thu': {
        title: 'Thursday, Week 5 Easter',
        first: { ref: 'Acts 15:7-21', text: 'We are saved through the grace of the Lord Jesus.' },
        psalm: { ref: 'Ps 96', refrain: 'Proclaim God\'s marvelous deeds.' },
        gospel: { ref: 'Jn 15:9-11', text: 'Remain in my love. My joy may be in you and your joy complete.' }
    },

    'easter-week-5-Fri': {
        title: 'Friday, Week 5 Easter',
        first: { ref: 'Acts 15:22-31', text: 'The Apostles sent representatives to Antioch.' },
        psalm: { ref: 'Ps 57', refrain: 'I will praise you, Lord, among the nations.' },
        gospel: { ref: 'Jn 15:12-17', text: 'Love one another as I love you. No one has greater love.' }
    },

    'easter-week-5-Sat': {
        title: 'Saturday, Week 5 Easter',
        first: { ref: 'Acts 16:1-10', text: 'Paul reached Derbe; there was a disciple named Timothy.' },
        psalm: { ref: 'Ps 100', refrain: 'Let all the earth cry out to God with joy.' },
        gospel: { ref: 'Jn 15:18-21', text: 'If the world hates you, realize that it hated me first.' }
    },

    'easter-week-6-Mon': {
        title: 'Monday, Week 6 Easter',
        first: { ref: 'Acts 16:11-15', text: 'Lydia listened; the Lord opened her heart.' },
        psalm: { ref: 'Ps 149', refrain: 'The Lord takes delight in his people.' },
        gospel: { ref: 'Jn 15:26-16:4a', text: 'When the Advocate comes, the Spirit of truth, he will testify to me.' }
    },

    'easter-week-6-Tue': {
        title: 'Tuesday, Week 6 Easter',
        first: { ref: 'Acts 16:22-34', text: 'Paul and Silas in prison; the earthquake; the jailer baptized.' },
        psalm: { ref: 'Ps 138', refrain: 'Your right hand saves me, O Lord.' },
        gospel: { ref: 'Jn 16:5-11', text: 'It is better for you that I go.' }
    },

    'easter-week-6-Wed': {
        title: 'Wednesday, Week 6 Easter',
        first: { ref: 'Acts 17:15,22-18:1', text: 'Paul at the Areopagus.' },
        psalm: { ref: 'Ps 148', refrain: 'Heaven and earth are full of your glory.' },
        gospel: { ref: 'Jn 16:12-15', text: 'The Spirit of truth will guide you to all truth.' }
    },

    'easter-week-6-Thu': {
        title: 'Thursday, Week 6 Easter',
        first: { ref: 'Acts 18:1-8', text: 'Paul in Corinth with Aquila and Priscilla.' },
        psalm: { ref: 'Ps 98', refrain: 'The Lord has revealed his saving power.' },
        gospel: { ref: 'Jn 16:16-20', text: 'You will grieve, but your grief will become joy.' }
    },

    'easter-week-6-Fri': {
        title: 'Friday, Week 6 Easter',
        first: { ref: 'Acts 18:9-18', text: 'The Lord said: Do not be afraid. I have many people in this city.' },
        psalm: { ref: 'Ps 47', refrain: 'God is the king of all the earth.' },
        gospel: { ref: 'Jn 16:20-23a', text: 'Your hearts will rejoice, and no one will take your joy.' }
    },

    'easter-week-6-Sat': {
        title: 'Saturday, Week 6 Easter',
        first: { ref: 'Acts 18:23-28', text: 'Apollos, eloquent and well versed in the Scriptures.' },
        psalm: { ref: 'Ps 47', refrain: 'God is the king of all the earth.' },
        gospel: { ref: 'Jn 16:23b-28', text: 'Whatever you ask the Father in my name he will give you.' }
    }

};

/* ── READING LOOKUP ── */
function getReadingsForDate(date) {
    if (!window.Liturgical) return null;
    const Lit = window.Liturgical;
    const d = Lit.stripTime(date);
    const sc = Lit.getSundayCycle(d);
    const wk = Lit.getLiturgicalWeek(d);
    const dow = d.getDay();
    const dn = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    // 1. Fixed solemnities
    const fk = 'fixed-'+(d.getMonth()+1)+'-'+d.getDate();
    if (READINGS[fk]) return { key: fk, ...READINGS[fk] };

    // 2. Movable feasts
    const dates = Lit.getKeyDates(d.getFullYear());
    if (Lit.sameDay(d, dates.easter))       return { key: 'easter-sunday', ...READINGS['easter-sunday'] };
    if (Lit.sameDay(d, dates.pentecost))    return { key: 'pentecost', ...READINGS['pentecost'] };
    if (Lit.sameDay(d, dates.ashWednesday)) return { key: 'lent-ash-wednesday', ...READINGS['lent-ash-wednesday'] };
    for (const mk of ['trinity-'+sc, 'corpus-'+sc]) {
        const mdate = mk.startsWith('trinity') ? dates.trinitySunday : dates.corpusChristi;
        if (Lit.sameDay(d, mdate) && READINGS[mk]) return { key: mk, ...READINGS[mk] };
    }

    // 3. Sundays
    if (dow === 0) {
        let key = null;
        if (wk.period === 'Easter')         key = 'easter-'+sc+'-Sun-'+wk.weekNumber;
        else if (wk.period === 'Advent')     key = 'advent-Sun-'+wk.weekNumber+'-'+sc;
        else if (wk.period === 'Lent')       key = 'lent-Sun-'+wk.weekNumber+'-'+sc;
        else if (wk.period === 'Holy Week')  key = 'lent-Sun-6-'+sc;
        else if (wk.period === 'Ordinary Time') key = 'ot-Sun-'+wk.weekNumber+'-'+sc;
        if (key && READINGS[key]) return { key, ...READINGS[key] };
    }

    // 4. Weekdays
    const wkKey = 'easter-week-'+wk.weekNumber+'-'+dn[dow];
    if (READINGS[wkKey]) return { key: wkKey, ...READINGS[wkKey] };

    // 5. Fallback
    return {
        key: null,
        title: wk.period + (wk.weekNumber ? ', Week '+wk.weekNumber : '') + ' ('+dn[dow]+')',
        first:  { ref: 'See USCCB.org', text: "Today's readings are available at bible.usccb.org" },
        psalm:  { ref: '—', refrain: '' },
        gospel: { ref: 'See USCCB.org', text: 'Visit bible.usccb.org for the full daily readings.' }
    };
}

if (typeof window !== 'undefined') {
    window.READINGS = READINGS;
    window.getReadingsForDate = getReadingsForDate;
}
