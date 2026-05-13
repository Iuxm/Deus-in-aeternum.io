/* ═══════════════════════════════════════════════════════════════
   CATHOLIC PRAYERS — COMPREHENSIVE COLLECTION
   
   Each prayer includes:
   - name:     English title
   - latin:    Latin title
   - category: For filtering/grouping
   - text:     Full prayer text
   - source:   Origin or attribution (optional)
   
   Sources: Roman Missal, Liturgy of the Hours, Raccolta,
   traditional devotional texts. All prayers are part of the
   public patrimony of the Catholic Church.
   ═══════════════════════════════════════════════════════════════ */

const PRAYERS = [

    /* ══════════════════════════════════════
       ESSENTIAL PRAYERS
       ══════════════════════════════════════ */

    { name: 'Sign of the Cross', latin: 'Signum Crucis', category: 'Essential',
      text: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.\n\n(In nomine Patris, et Filii, et Spiritus Sancti. Amen.)' },

    { name: 'Our Father', latin: 'Pater Noster', category: 'Essential',
      text: 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
      source: 'Matthew 6:9-13; Luke 11:2-4' },

    { name: 'Hail Mary', latin: 'Ave Maria', category: 'Essential',
      text: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
      source: 'Luke 1:28,42; Council of Ephesus (431 AD)' },

    { name: 'Glory Be', latin: 'Gloria Patri', category: 'Essential',
      text: 'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.' },

    { name: 'Apostles\' Creed', latin: 'Symbolum Apostolorum', category: 'Essential',
      text: 'I believe in God, the Father Almighty, Creator of heaven and earth, and in Jesus Christ, His only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; He descended into hell; on the third day He rose again from the dead; He ascended into heaven, and is seated at the right hand of God the Father Almighty; from there He will come to judge the living and the dead.\n\nI believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
      source: 'Traditional; formalized by the 4th century' },

    { name: 'Nicene Creed', latin: 'Symbolum Nicaenum', category: 'Essential',
      text: 'I believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible.\n\nI believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages. God from God, Light from Light, true God from true God, begotten, not made, consubstantial with the Father; through him all things were made. For us men and for our salvation he came down from heaven, and by the Holy Spirit was incarnate of the Virgin Mary, and became man.\n\nFor our sake he was crucified under Pontius Pilate, he suffered death and was buried, and rose again on the third day in accordance with the Scriptures. He ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead and his kingdom will have no end.\n\nI believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified, who has spoken through the prophets.\n\nI believe in one, holy, catholic and apostolic Church. I confess one Baptism for the forgiveness of sins and I look forward to the resurrection of the dead and the life of the world to come. Amen.',
      source: 'Council of Nicaea (325) & Constantinople (381)' },

    /* ══════════════════════════════════════
       ACTS OF FAITH, HOPE, CHARITY, CONTRITION
       ══════════════════════════════════════ */

    { name: 'Act of Faith', latin: 'Actus Fidei', category: 'Acts',
      text: 'O my God, I firmly believe that you are one God in three Divine Persons, Father, Son, and Holy Spirit. I believe that your divine Son became man and died for our sins and that he will come to judge the living and the dead. I believe these and all the truths which the Holy Catholic Church teaches because you have revealed them, who are eternal truth and wisdom, who can neither deceive nor be deceived. In this faith I intend to live and die. Amen.' },

    { name: 'Act of Hope', latin: 'Actus Spei', category: 'Acts',
      text: 'O Lord God, I hope by your grace for the pardon of all my sins and after life here to gain eternal happiness because you have promised it, who are infinitely powerful, faithful, kind, and merciful. In this hope I intend to live and die. Amen.' },

    { name: 'Act of Charity (Love)', latin: 'Actus Caritatis', category: 'Acts',
      text: 'O Lord God, I love you above all things and I love my neighbor for your sake because you are the highest, infinite and perfect good, worthy of all my love. In this love I intend to live and die. Amen.' },

    { name: 'Act of Contrition', latin: 'Actus Contritionis', category: 'Acts',
      text: 'O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all because they offend Thee, my God, who art all-good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasions of sin. Amen.' },

    /* ══════════════════════════════════════
       MARIAN PRAYERS
       ══════════════════════════════════════ */

    { name: 'Hail Holy Queen', latin: 'Salve Regina', category: 'Marian',
      text: 'Hail, holy Queen, Mother of mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.\n\nV. Pray for us, O holy Mother of God.\nR. That we may be made worthy of the promises of Christ.',
      source: 'Attributed to Hermann of Reichenau (1013-1054)' },

    { name: 'The Memorare', latin: 'Memorare', category: 'Marian',
      text: 'Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession was left unaided. Inspired by this confidence, I fly unto thee, O Virgin of virgins, my mother; to thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.',
      source: 'Attributed to St. Bernard of Clairvaux (12th c.)' },

    { name: 'The Angelus', latin: 'Angelus Domini', category: 'Marian',
      text: 'V. The Angel of the Lord declared unto Mary,\nR. And she conceived of the Holy Spirit.\nHail Mary…\n\nV. Behold the handmaid of the Lord,\nR. Be it done unto me according to thy word.\nHail Mary…\n\nV. And the Word was made flesh,\nR. And dwelt among us.\nHail Mary…\n\nV. Pray for us, O holy Mother of God,\nR. That we may be made worthy of the promises of Christ.\n\nLet us pray: Pour forth, we beseech Thee, O Lord, Thy grace into our hearts; that we, to whom the Incarnation of Christ Thy Son was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection, through the same Christ Our Lord. Amen.',
      source: 'Traditional; prayed at 6 AM, noon, and 6 PM' },

    { name: 'Regina Caeli', latin: 'Regina Caeli', category: 'Marian',
      text: 'Queen of Heaven, rejoice, alleluia.\nFor He whom you did merit to bear, alleluia.\nHas risen, as he said, alleluia.\nPray for us to God, alleluia.\n\nV. Rejoice and be glad, O Virgin Mary, alleluia.\nR. For the Lord has truly risen, alleluia.\n\nLet us pray: O God, who gave joy to the world through the resurrection of Thy Son, our Lord Jesus Christ, grant, we beseech Thee, that through the intercession of the Virgin Mary, His Mother, we may obtain the joys of everlasting life. Through the same Christ our Lord. Amen.',
      source: 'Traditional; replaces the Angelus during Easter (Easter Sunday to Pentecost)' },

    { name: 'The Magnificat', latin: 'Magnificat', category: 'Marian',
      text: 'My soul proclaims the greatness of the Lord,\nmy spirit rejoices in God my Savior,\nfor he has looked with favor on his lowly servant.\nFrom this day all generations will call me blessed:\nthe Almighty has done great things for me,\nand holy is his Name.\n\nHe has mercy on those who fear him\nin every generation.\nHe has shown the strength of his arm,\nhe has scattered the proud in their conceit.\nHe has cast down the mighty from their thrones,\nand has lifted up the lowly.\nHe has filled the hungry with good things,\nand the rich he has sent away empty.\n\nHe has come to the help of his servant Israel\nfor he has remembered his promise of mercy,\nthe promise he made to our fathers,\nto Abraham and his children for ever.\n\nGlory be to the Father, and to the Son,\nand to the Holy Spirit,\nas it was in the beginning, is now,\nand ever shall be, world without end. Amen.',
      source: 'Luke 1:46-55; Vespers hymn of the Liturgy of the Hours' },

    { name: 'Sub Tuum Praesidium', latin: 'Sub Tuum Praesidium', category: 'Marian',
      text: 'We fly to thy protection, O Holy Mother of God; despise not our petitions in our necessities, but deliver us always from all dangers, O glorious and blessed Virgin. Amen.',
      source: 'Earliest known Marian prayer (c. 250 AD), found on Egyptian papyrus' },

    { name: 'Ave Maris Stella', latin: 'Ave Maris Stella', category: 'Marian',
      text: 'Hail, bright star of ocean, God\'s own Mother blest,\nEver sinless Virgin, Gate of heavenly rest.\n\nTaking that sweet Ave Which from Gabriel came,\nPeace confirm within us, Changing Eva\'s name.\n\nBreak the captives\' fetters, Light on blindness pour,\nAll our ills expelling, Every bliss implore.\n\nShow thyself a Mother; May the Word Divine,\nBorn for us thy Infant, Hear our prayers through thine.\n\nVirgin all excelling, Mildest of the mild,\nFreed from guilt, preserve us, Pure and undefiled.\n\nKeep our life all spotless, Make our way secure,\nTill we find in Jesus Joy forevermore.\n\nThrough the highest heaven To the Almighty Three,\nFather, Son and Spirit, One same glory be. Amen.',
      source: 'Vespers hymn, possibly 9th century' },

    /* ══════════════════════════════════════
       EUCHARISTIC PRAYERS
       ══════════════════════════════════════ */

    { name: 'Anima Christi', latin: 'Anima Christi', category: 'Eucharistic',
      text: 'Soul of Christ, sanctify me.\nBody of Christ, save me.\nBlood of Christ, inebriate me.\nWater from the side of Christ, wash me.\nPassion of Christ, strengthen me.\nO good Jesus, hear me.\nWithin Thy wounds hide me.\nSuffer me not to be separated from Thee.\nFrom the malicious enemy defend me.\nIn the hour of my death call me\nAnd bid me come unto Thee,\nThat with Thy Saints I may praise Thee\nForever and ever. Amen.',
      source: '14th century; popularized by St. Ignatius of Loyola' },

    { name: 'Prayer Before Communion', latin: 'Ante Communionem', category: 'Eucharistic',
      text: 'Lord, I am not worthy that you should enter under my roof, but only say the word and my soul shall be healed.\n\nLord Jesus Christ, Son of the living God, who, by the will of the Father and the work of the Holy Spirit, through your Death gave life to the world, free me by this, your most holy Body and Blood, from all my sins and from every evil; keep me always faithful to your commandments, and never let me be parted from you. Amen.',
      source: 'Roman Missal; cf. Matthew 8:8' },

    { name: 'Prayer After Communion (Aquinas)', latin: 'Gratias Tibi Ago', category: 'Eucharistic',
      text: 'Lord, Father all-powerful and ever-living God, I thank You, for even though I am a sinner, your unprofitable servant, not because of my worth but in the kindness of your mercy, You have fed me with the precious Body and Blood of Your Son, our Lord Jesus Christ.\n\nI pray that this Holy Communion may not bring me condemnation and punishment but forgiveness and salvation. May it be a helmet of faith and a shield of good will. May it purify me from evil ways and put an end to my evil passions. May it bring me charity and patience, humility and obedience, and growth in the power to do good.\n\nMay it be my strong defense against all my enemies, visible and invisible, and the perfect calming of all my evil impulses, bodily and spiritual. May it unite me more closely to you, the one true God, and lead me safely through death to everlasting happiness with You. And I pray that You will lead me, a sinner, to the banquet where You, with Your Son and Holy Spirit, are true and perfect light, total fulfillment, everlasting joy, gladness without end, and perfect happiness to your saints. Grant this through Christ our Lord. Amen.',
      source: 'St. Thomas Aquinas (1225-1274)' },

    { name: 'Spiritual Communion', latin: 'Communio Spiritualis', category: 'Eucharistic',
      text: 'My Jesus, I believe that You are present in the Most Holy Sacrament. I love You above all things, and I desire to receive You into my soul. Since I cannot at this moment receive You sacramentally, come at least spiritually into my heart. I embrace You as if You were already there and unite myself wholly to You. Never permit me to be separated from You. Amen.',
      source: 'St. Alphonsus Liguori (1696-1787)' },

    { name: 'O Salutaris Hostia', latin: 'O Salutaris Hostia', category: 'Eucharistic',
      text: 'O saving Victim, opening wide\nThe gate of heaven to us below,\nOur foes press on from every side;\nThine aid supply, Thy strength bestow.\n\nTo Thy great name be endless praise,\nImmortal Godhead, one in Three;\nOh, grant us endless length of days\nIn our true native land with Thee. Amen.',
      source: 'St. Thomas Aquinas; Vespers hymn of Corpus Christi' },

    { name: 'Tantum Ergo', latin: 'Tantum Ergo', category: 'Eucharistic',
      text: 'Down in adoration falling,\nLo! the sacred Host we hail,\nLo! o\'er ancient forms departing\nNewer rites of grace prevail;\nFaith for all defects supplying,\nWhere the feeble senses fail.\n\nTo the everlasting Father,\nAnd the Son who reigns on high\nWith the Holy Spirit proceeding\nForth from each eternally,\nBe salvation, honor, blessing,\nMight and endless majesty. Amen.\n\nV. You have given them bread from heaven.\nR. Having all sweetness within it.',
      source: 'St. Thomas Aquinas; final stanzas of Pange Lingua; sung at Benediction' },

    /* ══════════════════════════════════════
       PENITENTIAL PRAYERS
       ══════════════════════════════════════ */

    { name: 'Confiteor', latin: 'Confiteor', category: 'Penitential',
      text: 'I confess to almighty God and to you, my brothers and sisters, that I have greatly sinned, in my thoughts and in my words, in what I have done and in what I have failed to do, through my fault, through my fault, through my most grievous fault; therefore I ask blessed Mary ever-Virgin, all the Angels and Saints, and you, my brothers and sisters, to pray for me to the Lord our God.',
      source: 'Penitential Act, Roman Missal' },

    { name: 'Psalm 51 (Miserere)', latin: 'Miserere Mei, Deus', category: 'Penitential',
      text: 'Have mercy on me, O God, in your goodness; in the greatness of your compassion wipe out my offense. Thoroughly wash me from my guilt and of my sin cleanse me.\n\nFor I acknowledge my offense, and my sin is before me always. Against you only have I sinned, and done what is evil in your sight.\n\nA clean heart create for me, O God, and a steadfast spirit renew within me. Cast me not out from your presence, and your Holy Spirit take not from me.\n\nGive me back the joy of your salvation, and a willing spirit sustain in me. My sacrifice, O God, is a contrite spirit; a heart contrite and humbled, O God, you will not spurn.',
      source: 'Psalm 51 (Vulgate: Psalm 50); attributed to King David' },

    { name: 'Fatima Prayer', latin: 'Oratio Fatimae', category: 'Penitential',
      text: 'O my Jesus, forgive us our sins, save us from the fires of hell. Lead all souls to Heaven, especially those in most need of Thy mercy. Amen.',
      source: 'Our Lady of Fátima (1917); prayed after each decade of the Rosary' },

    /* ══════════════════════════════════════
       PRAYERS TO SAINTS & ANGELS
       ══════════════════════════════════════ */

    { name: 'Prayer to St. Michael', latin: 'Sancte Michael Archangele', category: 'Saints',
      text: 'Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil; May God rebuke him, we humbly pray; And do thou, O Prince of the Heavenly Host, by the power of God, thrust into hell Satan and all evil spirits who wander through the world for the ruin of souls. Amen.',
      source: 'Pope Leo XIII (1884); formerly recited after Low Mass' },

    { name: 'Guardian Angel Prayer', latin: 'Angele Dei', category: 'Saints',
      text: 'Angel of God, my guardian dear, to whom God\'s love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen.',
      source: 'Traditional; attributed to Reginald of Canterbury (11th century)' },

    { name: 'Prayer to St. Joseph', latin: 'Ad Sanctum Iosephum', category: 'Saints',
      text: 'O St. Joseph, whose protection is so great, so strong, so prompt before the throne of God, I place in thee all my interests and desires.\n\nO St. Joseph, do assist me by thy powerful intercession and obtain for me from thy divine Son all spiritual blessings through Jesus Christ, our Lord; so that having engaged here below thy heavenly power, I may offer my thanksgiving and homage to the most loving of Fathers.\n\nO St. Joseph, I never weary of contemplating thee and Jesus asleep in thy arms. I dare not approach while He reposes near thy heart. Press Him in my name and kiss His fine head for me, and ask Him to return the kiss when I draw my dying breath. Saint Joseph, patron of departing souls, pray for me. Amen.',
      source: 'Traditional devotional prayer' },

    { name: 'Prayer to St. Francis', latin: 'Oratio Sancti Francisci', category: 'Saints',
      text: 'Lord, make me an instrument of your peace: where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; where there is sadness, joy.\n\nO divine Master, grant that I may not so much seek to be consoled as to console, to be understood as to understand, to be loved as to love. For it is in giving that we receive, it is in pardoning that we are pardoned, and it is in dying that we are born to eternal life. Amen.',
      source: 'Attributed to St. Francis of Assisi; earliest known version from 1912' },

    { name: 'Prayer to the Holy Spirit', latin: 'Veni Sancte Spiritus', category: 'Saints',
      text: 'Come, Holy Spirit, fill the hearts of thy faithful and kindle in them the fire of thy love.\n\nV. Send forth thy Spirit and they shall be created.\nR. And thou shalt renew the face of the earth.\n\nLet us pray: O God, who by the light of the Holy Spirit did instruct the hearts of the faithful, grant that by the same Holy Spirit we may be truly wise and ever enjoy his consolation. Through Christ our Lord. Amen.',
      source: 'Traditional; Pentecost sequence' },

    { name: 'Veni Creator Spiritus', latin: 'Veni Creator Spiritus', category: 'Saints',
      text: 'Come, Holy Spirit, Creator blest,\nand in our souls take up Thy rest;\ncome with Thy grace and heavenly aid\nto fill the hearts which Thou hast made.\n\nO comforter, to Thee we cry,\nO heavenly gift of God Most High,\nO fount of life and fire of love,\nand sweet anointing from above.\n\nThou in Thy sevenfold gifts are known;\nThou, finger of God\'s hand we own;\nThou, promise of the Father, Thou\nWho dost the tongue with power endow.\n\nKindle our senses from above,\nand make our hearts o\'erflow with love;\nwith patience firm and virtue high\nthe weakness of our flesh supply.\n\nFar from us drive the foe we dread,\nand grant us Thy peace instead;\nso shall we not, with Thee for guide,\nturn from the path of life aside.\n\nOh, may Thy grace on us bestow\nthe Father and the Son to know;\nand Thee, through endless times confessed,\nof both the eternal Spirit blest.\n\nNow to the Father and the Son,\nWho rose from death, be glory given,\nwith Thou, O Holy Comforter,\nhenceforth by all in earth and heaven. Amen.',
      source: 'Attributed to Rabanus Maurus (9th century); sung at ordinations, confirmations, papal elections' },

    /* ══════════════════════════════════════
       MORNING & EVENING PRAYERS
       ══════════════════════════════════════ */

    { name: 'Morning Offering', latin: 'Oblatio Matutina', category: 'Morning/Evening',
      text: 'O Jesus, through the Immaculate Heart of Mary, I offer you my prayers, works, joys and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world. I offer them for all the intentions of Your Sacred Heart: the salvation of souls, reparation for sin, and the reunion of all Christians. I offer them for the intentions of our bishops and of all apostles of prayer, and in particular for those recommended by our Holy Father this month. Amen.',
      source: 'Apostleship of Prayer (now Pope\'s Worldwide Prayer Network)' },

    { name: 'Night Prayer (Compline)', latin: 'Completorium', category: 'Morning/Evening',
      text: 'Visit, we beseech You, O Lord, this dwelling, and drive far from it all snares of the enemy. Let your holy angels dwell herein to preserve us in peace; and let your blessing be upon all who live here, through Jesus Christ our Lord. Amen.\n\nMay the all-powerful Lord grant us a restful night and a peaceful death. Amen.',
      source: 'Liturgy of the Hours, Night Prayer (Compline)' },

    { name: 'Nunc Dimittis (Canticle of Simeon)', latin: 'Nunc Dimittis', category: 'Morning/Evening',
      text: 'Lord, now you let your servant go in peace; your word has been fulfilled:\nmy own eyes have seen the salvation which you have prepared in the sight of every people:\na light to reveal you to the nations and the glory of your people Israel.\n\nGlory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.',
      source: 'Luke 2:29-32; Canticle of Night Prayer (Compline)' },

    { name: 'Benedictus (Canticle of Zechariah)', latin: 'Benedictus', category: 'Morning/Evening',
      text: 'Blessed be the Lord, the God of Israel;\nhe has come to his people and set them free.\nHe has raised up for us a mighty savior,\nborn of the house of his servant David.\n\nThrough his holy prophets he promised of old\nthat he would save us from our enemies,\nfrom the hands of all who hate us.\nHe promised to show mercy to our fathers\nand to remember his holy covenant.\n\nThis was the oath he swore to our father Abraham:\nto set us free from the hands of our enemies,\nfree to worship him without fear,\nholy and righteous in his sight all the days of our life.\n\nYou, my child, shall be called the prophet of the Most High;\nfor you will go before the Lord to prepare his way,\nto give his people knowledge of salvation\nby the forgiveness of their sins.\n\nIn the tender compassion of our God\nthe dawn from on high shall break upon us,\nto shine on those who dwell in darkness and the shadow of death,\nand to guide our feet into the way of peace.',
      source: 'Luke 1:68-79; Canticle of Morning Prayer (Lauds)' },

    /* ══════════════════════════════════════
       SACRED HEART & DEVOTIONAL
       ══════════════════════════════════════ */

    { name: 'Litany of the Sacred Heart', latin: 'Litaniae Sacratissimi Cordis', category: 'Devotional',
      text: 'Lord, have mercy. Christ, have mercy. Lord, have mercy.\nChrist, hear us. Christ, graciously hear us.\n\nHeart of Jesus, Son of the Eternal Father — have mercy on us.\nHeart of Jesus, formed by the Holy Spirit in the womb of the Virgin Mother — have mercy on us.\nHeart of Jesus, substantially united to the Word of God — have mercy on us.\nHeart of Jesus, of infinite majesty — have mercy on us.\nHeart of Jesus, sacred temple of God — have mercy on us.\nHeart of Jesus, tabernacle of the Most High — have mercy on us.\nHeart of Jesus, house of God and gate of heaven — have mercy on us.\nHeart of Jesus, burning furnace of charity — have mercy on us.\nHeart of Jesus, abode of justice and love — have mercy on us.\nHeart of Jesus, full of goodness and love — have mercy on us.\nHeart of Jesus, abyss of all virtues — have mercy on us.\nHeart of Jesus, patient and most merciful — have mercy on us.\nHeart of Jesus, desire of the everlasting hills — have mercy on us.\nHeart of Jesus, king and center of all hearts — have mercy on us.\nHeart of Jesus, our life and resurrection — have mercy on us.\nHeart of Jesus, our peace and reconciliation — have mercy on us.\n\nLamb of God, who takes away the sins of the world — spare us, O Lord.\nLamb of God, who takes away the sins of the world — graciously hear us, O Lord.\nLamb of God, who takes away the sins of the world — have mercy on us.\n\nJesus, meek and humble of heart, make our hearts like unto Thine. Amen.',
      source: 'Approved by Pope Leo XIII (1899)' },

    { name: 'Divine Mercy Chaplet', latin: 'Corona Divinae Misericordiae', category: 'Devotional',
      text: 'You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us.\n\nO Blood and Water, which gushed forth from the Heart of Jesus as a fountain of Mercy for us, I trust in You!\n\nOn the Our Father beads:\nEternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world.\n\nOn the Hail Mary beads (10 times):\nFor the sake of His sorrowful Passion, have mercy on us and on the whole world.\n\nClosing (3 times):\nHoly God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.',
      source: 'St. Faustina Kowalska (1935); canonized 2000' },

    { name: 'Consecration to the Sacred Heart', latin: 'Consecratio Sacratissimo Cordi', category: 'Devotional',
      text: 'O Sacred Heart of Jesus, to Thee I consecrate and offer up my person and my life, my actions, trials, and sufferings, that my entire being may henceforth only be employed in loving, honoring, and glorifying Thee. This is my irrevocable will, to belong entirely to Thee, and to do all for Thy love, renouncing with my whole heart all that can displease Thee.\n\nI take Thee, O Sacred Heart, for the sole object of my love, the protection of my life, the pledge of my salvation, the remedy of my frailty and inconstancy, the reparation for all the defects of my life, and my secure refuge at the hour of my death.\n\nBe Thou, O Heart of Goodness, my justification before God Thy Father, and screen me from His anger which I have so justly merited. I fear all from my own weakness and malice, but placing my entire confidence in Thee, O Heart of Love, I hope all from Thy infinite goodness. Amen.',
      source: 'St. Margaret Mary Alacoque (1647-1690)' },

    /* ══════════════════════════════════════
       PRAYERS FOR THE DEAD
       ══════════════════════════════════════ */

    { name: 'Eternal Rest', latin: 'Requiem Aeternam', category: 'For the Dead',
      text: 'Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May the souls of all the faithful departed, through the mercy of God, rest in peace. Amen.',
      source: 'Traditional; from the Mass for the Dead (Requiem)' },

    { name: 'De Profundis (Psalm 130)', latin: 'De Profundis', category: 'For the Dead',
      text: 'Out of the depths I cry to you, O Lord; Lord, hear my voice! Let your ears be attentive to my voice in supplication.\n\nIf you, O Lord, mark iniquities, Lord, who can stand? But with you is forgiveness, that you may be revered.\n\nI trust in the Lord; my soul trusts in his word. My soul waits for the Lord more than sentinels wait for the dawn.\n\nMore than sentinels wait for the dawn, let Israel wait for the Lord. For with the Lord is kindness and with him is plenteous redemption; and he will redeem Israel from all their iniquities.\n\nEternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.',
      source: 'Psalm 130 (Vulgate: 129); prayed for the holy souls in Purgatory' },

    /* ══════════════════════════════════════
       IGNATIAN / JESUIT
       ══════════════════════════════════════ */

    { name: 'Suscipe (Take, Lord, Receive)', latin: 'Suscipe', category: 'Ignatian',
      text: 'Take, Lord, and receive all my liberty, my memory, my understanding, and my entire will, all I have and call my own. You have given all to me. To you, Lord, I return it. Everything is yours; do with it what you will. Give me only your love and your grace, that is enough for me.',
      source: 'St. Ignatius of Loyola, Spiritual Exercises (1548)' },

    { name: 'Examen Prayer', latin: 'Examen', category: 'Ignatian',
      text: 'Lord, I give you thanks for the gifts of this day.\n\nHelp me to see where you have been at work in my life today — in the people I met, the events that unfolded, the feelings I experienced.\n\nLord, I ask for the grace to see my sins clearly: the times I turned away from you, the times I failed to love my neighbor, the times I chose myself over others.\n\nI am sorry for these sins, Lord. I ask your forgiveness and your mercy.\n\nAs I look ahead to tomorrow, Lord, I ask for the grace to live more fully in your love. Help me to be more aware of your presence, more generous in my service, more faithful in my prayer. Amen.',
      source: 'Based on the Daily Examen of St. Ignatius of Loyola' },

    /* ══════════════════════════════════════
       FRANCISCAN
       ══════════════════════════════════════ */

    { name: 'Canticle of the Sun', latin: 'Canticum Fratris Solis', category: 'Franciscan',
      text: 'Most High, all-powerful, good Lord, all praise is yours, all glory, all honor, and all blessing. To you alone, Most High, do they belong. No mortal lips are worthy to pronounce your name.\n\nAll praise be yours, my Lord, through all that you have made, and first my lord Brother Sun, who brings the day; and light you give to us through him.\n\nHow beautiful is he, how radiant in all his splendor! Of you, Most High, he bears the likeness.\n\nAll praise be yours, my Lord, through Sister Moon and Stars; in the heavens you have made them, bright and precious and fair.\n\nAll praise be yours, my Lord, through Brothers Wind and Air, and fair and stormy, all the weather\'s moods, by which you cherish all that you have made.\n\nAll praise be yours, my Lord, through Sister Water, so useful, lowly, precious and pure.\n\nAll praise be yours, my Lord, through Brother Fire, through whom you brighten up the night.\n\nPraise and bless my Lord, and give him thanks, and serve him with great humility. Amen.',
      source: 'St. Francis of Assisi (1224); one of the earliest works of Italian literature' },

    /* ══════════════════════════════════════
       CARMELITE
       ══════════════════════════════════════ */

    { name: 'Soul of Christ (Teresa of Ávila)', latin: 'Nada Te Turbe', category: 'Carmelite',
      text: 'Let nothing disturb you,\nLet nothing frighten you,\nAll things are passing away:\nGod never changes.\nPatience obtains all things.\nWhoever has God lacks nothing;\nGod alone suffices.',
      source: 'St. Teresa of Ávila (1515-1582); found in her breviary after her death' },

    /* ══════════════════════════════════════
       DOMINICAN
       ══════════════════════════════════════ */

    { name: 'Prayer of St. Thomas Aquinas Before Study', latin: 'Ante Studium', category: 'Dominican',
      text: 'Creator of all things, true source of light and wisdom, lofty origin of all being, graciously let a ray of your brilliance penetrate into the darkness of my understanding and take from me the double darkness in which I have been born, an obscurity of both sin and ignorance.\n\nGive me a sharp sense of understanding, a retentive memory, and the ability to grasp things correctly and fundamentally. Grant me the talent of being exact in my explanations, and the ability to express myself with thoroughness and charm.\n\nPoint out the beginning, direct the progress, and help in the completion; through Christ our Lord. Amen.',
      source: 'St. Thomas Aquinas (1225-1274)' },

    /* ══════════════════════════════════════
       MASS RESPONSES
       ══════════════════════════════════════ */

    { name: 'Gloria (Glory to God in the Highest)', latin: 'Gloria in Excelsis Deo', category: 'Mass',
      text: 'Glory to God in the highest, and on earth peace to people of good will.\n\nWe praise you, we bless you, we adore you, we glorify you, we give you thanks for your great glory, Lord God, heavenly King, O God, almighty Father.\n\nLord Jesus Christ, Only Begotten Son, Lord God, Lamb of God, Son of the Father, you take away the sins of the world, have mercy on us; you take away the sins of the world, receive our prayer; you are seated at the right hand of the Father, have mercy on us.\n\nFor you alone are the Holy One, you alone are the Lord, you alone are the Most High, Jesus Christ, with the Holy Spirit, in the glory of God the Father. Amen.',
      source: 'Greater Doxology; Roman Missal' },

    { name: 'Sanctus (Holy, Holy, Holy)', latin: 'Sanctus', category: 'Mass',
      text: 'Holy, Holy, Holy Lord God of hosts.\nHeaven and earth are full of your glory.\nHosanna in the highest.\nBlessed is he who comes in the name of the Lord.\nHosanna in the highest.',
      source: 'Roman Missal; based on Isaiah 6:3 and Matthew 21:9' },

    { name: 'Agnus Dei (Lamb of God)', latin: 'Agnus Dei', category: 'Mass',
      text: 'Lamb of God, you take away the sins of the world, have mercy on us.\nLamb of God, you take away the sins of the world, have mercy on us.\nLamb of God, you take away the sins of the world, grant us peace.',
      source: 'Roman Missal; cf. John 1:29' },

    /* ══════════════════════════════════════
       BENEDICTION & ADORATION
       ══════════════════════════════════════ */

    { name: 'Divine Praises', latin: 'Laudes Divinae', category: 'Adoration',
      text: 'Blessed be God.\nBlessed be His Holy Name.\nBlessed be Jesus Christ, true God and true Man.\nBlessed be the Name of Jesus.\nBlessed be His Most Sacred Heart.\nBlessed be His Most Precious Blood.\nBlessed be Jesus in the Most Holy Sacrament of the Altar.\nBlessed be the Holy Spirit, the Paraclete.\nBlessed be the great Mother of God, Mary most Holy.\nBlessed be her Holy and Immaculate Conception.\nBlessed be her Glorious Assumption.\nBlessed be the name of Mary, Virgin and Mother.\nBlessed be St. Joseph, her most chaste spouse.\nBlessed be God in His Angels and in His Saints. Amen.',
      source: 'Composed by Luigi Felici (1797); recited at Benediction of the Blessed Sacrament' },

    /* ══════════════════════════════════════
       MEALTIME PRAYERS
       ══════════════════════════════════════ */

    { name: 'Grace Before Meals', latin: 'Benedic, Domine', category: 'Mealtime',
      text: 'Bless us, O Lord, and these Thy gifts, which we are about to receive from Thy bounty, through Christ our Lord. Amen.',
      source: 'Traditional' },

    { name: 'Grace After Meals', latin: 'Agimus Tibi Gratias', category: 'Mealtime',
      text: 'We give Thee thanks, Almighty God, for all Thy benefits, who livest and reignest world without end. Amen.\n\nMay the souls of the faithful departed, through the mercy of God, rest in peace. Amen.',
      source: 'Traditional' },

    /* ══════════════════════════════════════
       MARIAN LITANIES
       ══════════════════════════════════════ */

    { name: 'Litany of the Blessed Virgin Mary (Loreto)', latin: 'Litaniae Lauretanae', category: 'Litany',
      text: 'Lord, have mercy. Christ, have mercy. Lord, have mercy.\nChrist, hear us. Christ, graciously hear us.\n\nGod the Father of heaven — have mercy on us.\nGod the Son, Redeemer of the world — have mercy on us.\nGod the Holy Spirit — have mercy on us.\nHoly Trinity, one God — have mercy on us.\n\nHoly Mary — pray for us.\nHoly Mother of God — pray for us.\nHoly Virgin of virgins — pray for us.\nMother of Christ — pray for us.\nMother of the Church — pray for us.\nMother of mercy — pray for us.\nMother most pure — pray for us.\nMother most chaste — pray for us.\nMother inviolate — pray for us.\nMother undefiled — pray for us.\nMother most amiable — pray for us.\nMother of good counsel — pray for us.\nMother of our Creator — pray for us.\nMother of our Savior — pray for us.\n\nVirgin most prudent — pray for us.\nVirgin most venerable — pray for us.\nVirgin most renowned — pray for us.\nVirgin most powerful — pray for us.\nVirgin most merciful — pray for us.\nVirgin most faithful — pray for us.\n\nMirror of justice — pray for us.\nSeat of wisdom — pray for us.\nCause of our joy — pray for us.\nSpiritual vessel — pray for us.\nVessel of honor — pray for us.\nSingular vessel of devotion — pray for us.\nMystical rose — pray for us.\nTower of David — pray for us.\nTower of ivory — pray for us.\nHouse of gold — pray for us.\nArk of the covenant — pray for us.\nGate of heaven — pray for us.\nMorning star — pray for us.\n\nHealth of the sick — pray for us.\nRefuge of sinners — pray for us.\nComforter of the afflicted — pray for us.\nHelp of Christians — pray for us.\n\nQueen of Angels — pray for us.\nQueen of Patriarchs — pray for us.\nQueen of Prophets — pray for us.\nQueen of Apostles — pray for us.\nQueen of Martyrs — pray for us.\nQueen of Confessors — pray for us.\nQueen of Virgins — pray for us.\nQueen of all Saints — pray for us.\nQueen conceived without original sin — pray for us.\nQueen assumed into heaven — pray for us.\nQueen of the most holy Rosary — pray for us.\nQueen of families — pray for us.\nQueen of peace — pray for us.\n\nLamb of God, who takes away the sins of the world — spare us, O Lord.\nLamb of God, who takes away the sins of the world — graciously hear us, O Lord.\nLamb of God, who takes away the sins of the world — have mercy on us.\n\nPray for us, O holy Mother of God,\nthat we may be made worthy of the promises of Christ. Amen.',
      source: 'Traditional; approved by Pope Sixtus V (1587); titles updated through Pope Francis' }
];

if (typeof window !== 'undefined') window.PRAYERS = PRAYERS;
