/* ═══════════════════════════════════════════════════════════════
   CATHOLIC DOCTRINE & PAPAL DOCUMENTS
   
   All content drawn from the public teaching of the Holy See
   (vatican.va) and the Catechism of the Catholic Church (CCC).
   These documents are part of the public patrimony of the Church
   and are freely available to all the faithful.
   ═══════════════════════════════════════════════════════════════ */

const DOCTRINE = {

    /* ── DEFINED DOGMAS — the highest level of Catholic teaching ── */
    dogmas: [
        {
            title: 'The Most Holy Trinity',
            year: 'Defined: Council of Nicaea (325) & Constantinople (381)',
            summary: 'There is one God in three Divine Persons — Father, Son, and Holy Spirit — distinct, equal, eternal, and consubstantial.',
            text: 'The mystery of the Most Holy Trinity is the central mystery of Christian faith and life. It is the mystery of God in himself. The Father, the Son, and the Holy Spirit are not three gods but one God — three Persons sharing one divine nature, one essence, one eternal substance. Each Person is fully God, yet there is only one God. This is not a contradiction but a mystery beyond human comprehension, revealed by Christ himself.',
            ccc: 'CCC §232–267'
        },
        {
            title: 'The Hypostatic Union',
            year: 'Defined: Council of Chalcedon (451)',
            summary: 'Jesus Christ is one Divine Person with two distinct natures — fully God and fully man, "without confusion, without change, without division, without separation."',
            text: 'In the one Person of Christ, the divine and human natures are united without being mixed, changed, divided, or separated. He is true God and true man — not half-God and half-man, not God merely appearing as man, and not a mere man adopted as God\'s son. This union is the foundation of our salvation: only one who is fully God could redeem us; only one who is fully man could represent us.',
            ccc: 'CCC §464–478'
        },
        {
            title: 'The Immaculate Conception',
            year: 'Defined: Pope Pius IX, Ineffabilis Deus (December 8, 1854)',
            summary: 'The Blessed Virgin Mary, from the first moment of her conception, was preserved free from all stain of original sin by a singular grace and privilege of Almighty God, in view of the merits of Jesus Christ.',
            text: 'Pope Pius IX declared: "We pronounce, declare, and define that the doctrine which holds that the most Blessed Virgin Mary, in the first instant of her conception, by a singular grace and privilege granted by Almighty God, in view of the merits of Jesus Christ, the Saviour of the human race, was preserved free from all stain of original sin, is a doctrine revealed by God and therefore to be believed firmly and constantly by all the faithful."',
            ccc: 'CCC §490–493'
        },
        {
            title: 'Papal Infallibility',
            year: 'Defined: First Vatican Council (1870), Pastor Aeternus',
            summary: 'When the Pope speaks ex cathedra (from the chair of Peter) on matters of faith or morals, by virtue of his supreme apostolic authority, he speaks with infallibility.',
            text: 'The Roman Pontiff, when he speaks ex cathedra — that is, when, in discharge of the office of pastor and teacher of all Christians, he defines a doctrine regarding faith or morals to be held by the universal Church — possesses, by the divine assistance promised to him in Blessed Peter, that infallibility with which the Divine Redeemer willed his Church to be endowed in defining doctrine regarding faith or morals. This is a rare and solemn act, exercised only twice in modern history (1854 and 1950).',
            ccc: 'CCC §890–891'
        },
        {
            title: 'The Assumption of Mary',
            year: 'Defined: Pope Pius XII, Munificentissimus Deus (November 1, 1950)',
            summary: 'The Immaculate Mother of God, the ever-Virgin Mary, having completed the course of her earthly life, was assumed body and soul into heavenly glory.',
            text: 'After her earthly life was completed, the Blessed Virgin Mary was taken up — body and soul — into the glory of heaven. She is the first fruit of the redemption Christ won for all of humanity. The Assumption is a singular participation in the Resurrection of her Son and an anticipation of the resurrection of all the faithful at the end of time.',
            ccc: 'CCC §966'
        },
        {
            title: 'The Real Presence in the Eucharist',
            year: 'Defined: Council of Trent (1551), Session XIII',
            summary: 'In the Most Blessed Sacrament of the Eucharist, the Body and Blood, together with the Soul and Divinity, of Our Lord Jesus Christ are truly, really, and substantially contained.',
            text: 'After the consecration at Mass, the bread and wine are no longer bread and wine — they have become the Body and Blood of Christ, while still appearing as bread and wine. This conversion is called transubstantiation. The Eucharist is the source and summit of the entire Christian life (Lumen Gentium 11) — Christ Himself, given to us as food for the journey of faith.',
            ccc: 'CCC §1373–1377'
        },
        {
            title: 'The Seven Sacraments',
            year: 'Defined: Council of Trent (1547), Session VII',
            summary: 'The seven sacraments are: Baptism, Confirmation, Eucharist, Penance, Anointing of the Sick, Holy Orders, and Matrimony.',
            text: 'Instituted by Christ Himself, the seven sacraments are efficacious signs of grace by which divine life is dispensed to us. They are: Baptism (rebirth in Christ), Confirmation (sealing with the Holy Spirit), Eucharist (the Body and Blood of Christ), Penance/Reconciliation (forgiveness of sins), Anointing of the Sick (healing and strength), Holy Orders (ordination of bishops, priests, and deacons), and Matrimony (the covenant of husband and wife). Each sacrament confers the grace it signifies.',
            ccc: 'CCC §1113–1134'
        }
    ],

    /* ── MAJOR ENCYCLICALS ── */
    encyclicals: [
        {
            title: 'Rerum Novarum',
            translated: 'Of New Things',
            pope: 'Pope Leo XIII',
            date: 'May 15, 1891',
            summary: 'The foundational document of modern Catholic Social Teaching, addressing the rights and dignity of workers in the industrial age.',
            key: 'In response to the upheaval of the Industrial Revolution, Leo XIII defended the right of workers to a just wage, safe conditions, and the formation of trade unions. He affirmed the right to private property while condemning both unrestrained capitalism and revolutionary socialism. Workers and employers, he taught, are bound by mutual obligations rooted in the natural law and the Gospel.'
        },
        {
            title: 'Humani Generis',
            translated: 'Of the Human Race',
            pope: 'Pope Pius XII',
            date: 'August 12, 1950',
            summary: 'Addresses errors that threatened the foundations of Catholic doctrine, particularly regarding biblical interpretation, evolution, and theological method.',
            key: 'Pius XII defended the historicity of Genesis, the reality of original sin, the necessity of the Magisterium for authentic biblical interpretation, and traditional metaphysics. He opened — with care — the possibility that the human body could have developed through evolutionary processes, while affirming that the human soul is directly created by God.'
        },
        {
            title: 'Humanae Vitae',
            translated: 'Of Human Life',
            pope: 'Pope St. Paul VI',
            date: 'July 25, 1968',
            summary: 'Reaffirms the Church\'s teaching on the inseparable connection between the unitive and procreative meanings of the conjugal act, and the immorality of contraception.',
            key: 'Against widespread cultural pressure, Paul VI taught that every act of marital love must remain open to the transmission of life. Artificial contraception is intrinsically evil because it severs the unitive and procreative meanings of the conjugal act. The encyclical proved prophetic in its predictions of the consequences for marriage, family life, and culture.'
        },
        {
            title: 'Redemptor Hominis',
            translated: 'The Redeemer of Man',
            pope: 'Pope St. John Paul II',
            date: 'March 4, 1979',
            summary: 'The first encyclical of John Paul II, presenting Christ as the center of the universe and of human history — the answer to every human longing.',
            key: '"The Redeemer of man, Jesus Christ, is the centre of the universe and of history." John Paul II\'s programmatic encyclical that set the tone of his pontificate: a Christocentric humanism that affirms the dignity of every person, redeemed at infinite cost by the love of God.'
        },
        {
            title: 'Veritatis Splendor',
            translated: 'The Splendor of Truth',
            pope: 'Pope St. John Paul II',
            date: 'August 6, 1993',
            summary: 'A defense of the objective moral law, intrinsic evil, and the indispensable foundation of moral truth.',
            key: 'Against moral relativism and proportionalism, John Paul II reaffirmed that there are certain acts — including murder, abortion, contraception, adultery — which are intrinsically evil, regardless of intention or circumstance. The freedom of conscience must be informed by truth.'
        },
        {
            title: 'Evangelium Vitae',
            translated: 'The Gospel of Life',
            pope: 'Pope St. John Paul II',
            date: 'March 25, 1995',
            summary: 'A solemn defense of the inviolable dignity of every human life, from conception to natural death.',
            key: 'John Paul II reaffirmed the Church\'s opposition to abortion, euthanasia, and the death penalty (in most circumstances), while warning against a "culture of death" and calling all the faithful to build a "civilization of love" and a "culture of life."'
        },
        {
            title: 'Fides et Ratio',
            translated: 'Faith and Reason',
            pope: 'Pope St. John Paul II',
            date: 'September 14, 1998',
            summary: 'On the harmony of faith and reason — the two wings on which the human spirit rises to contemplation of the truth.',
            key: '"Faith and reason are like two wings on which the human spirit rises to the contemplation of truth." John Paul II rejected fideism (faith without reason) and rationalism (reason without faith), and called philosophy back to the great metaphysical questions about being, truth, and God.'
        },
        {
            title: 'Deus Caritas Est',
            translated: 'God is Love',
            pope: 'Pope Benedict XVI',
            date: 'December 25, 2005',
            summary: 'On Christian love — eros, agape, and the unity of love of God and love of neighbor.',
            key: 'Benedict XVI\'s first encyclical: a profound meditation on the Christian understanding of love. Eros (longing love) and agape (self-giving love) are not opposed but united and transfigured in Christ. The Church\'s charity is not an optional appendix to her mission — it is constitutive of her very being.'
        },
        {
            title: 'Spe Salvi',
            translated: 'In Hope We Are Saved',
            pope: 'Pope Benedict XVI',
            date: 'November 30, 2007',
            summary: 'On Christian hope — the firm and unwavering hope in eternal life with God.',
            key: 'Hope is not a vague optimism but a confident expectation grounded in the Resurrection of Christ. Benedict explores what it means to live with eyes fixed on heaven while engaged in the work of this world. He addresses purgatory, the Last Judgment, and the doctrine of the communion of saints.'
        },
        {
            title: 'Caritas in Veritate',
            translated: 'Charity in Truth',
            pope: 'Pope Benedict XVI',
            date: 'June 29, 2009',
            summary: 'On integral human development — the social doctrine of the Church applied to globalization, economy, and ecology.',
            key: 'Charity must always be rooted in truth. Without truth, charity becomes sentimentalism; without charity, truth becomes harsh. Benedict explores justice and the common good in a globalized economy and emphasizes that genuine human development must include the spiritual dimension.'
        },
        {
            title: 'Lumen Fidei',
            translated: 'The Light of Faith',
            pope: 'Pope Francis (with Benedict XVI)',
            date: 'June 29, 2013',
            summary: 'On faith as a light from God that illuminates every dimension of human existence.',
            key: 'Begun by Benedict XVI and completed by Francis, this encyclical completes the trilogy on the theological virtues (faith, hope, charity). Faith is not merely individual; it is given by God and held in the communion of the Church.'
        },
        {
            title: 'Laudato Si\'',
            translated: 'Praise Be to You',
            pope: 'Pope Francis',
            date: 'May 24, 2015',
            summary: 'On care for our common home — an integral ecology that recognizes all creation as a gift of the Creator.',
            key: 'Francis calls humanity to a new ecological conversion, recognizing the interconnection of environmental, social, and human ecologies. The poor suffer most from environmental degradation. Authentic care for creation flows from belief in a Creator who has entrusted the earth to us.'
        },
        {
            title: 'Fratelli Tutti',
            translated: 'Brothers All',
            pope: 'Pope Francis',
            date: 'October 3, 2020',
            summary: 'On fraternity and social friendship — a vision of universal brotherhood founded on the Gospel.',
            key: 'Drawing inspiration from St. Francis of Assisi, Francis appeals for a worldwide rebirth of fraternity and social friendship that transcends national, ethnic, and religious boundaries. The parable of the Good Samaritan is held up as the model of true neighborliness.'
        }
    ],

    /* ── DOCUMENTS OF THE SECOND VATICAN COUNCIL (1962-1965) ── */
    vaticanII: [
        {
            title: 'Sacrosanctum Concilium',
            translated: 'On the Sacred Liturgy',
            type: 'Constitution',
            date: 'December 4, 1963',
            key: 'The first major document of the Council, calling for renewal of the sacred liturgy. The fully conscious and active participation of the faithful in liturgical celebrations is presented as the goal "to be considered before all else."'
        },
        {
            title: 'Lumen Gentium',
            translated: 'Light of the Nations',
            type: 'Dogmatic Constitution on the Church',
            date: 'November 21, 1964',
            key: 'A comprehensive theology of the Church as the People of God, the Body of Christ, and the universal sacrament of salvation. It develops the universal call to holiness, the role of the laity, and Mary\'s place in the mystery of the Church.'
        },
        {
            title: 'Dei Verbum',
            translated: 'The Word of God',
            type: 'Dogmatic Constitution on Divine Revelation',
            date: 'November 18, 1965',
            key: 'On Sacred Scripture and Sacred Tradition as the two channels through which the Word of God comes to us, with the Magisterium as their authentic interpreter. Encourages all the faithful to read the Bible.'
        },
        {
            title: 'Gaudium et Spes',
            translated: 'Joy and Hope',
            type: 'Pastoral Constitution on the Church in the Modern World',
            date: 'December 7, 1965',
            key: '"The joys and the hopes, the griefs and the anxieties of the men of this age... are the joys and hopes, the griefs and anxieties of the followers of Christ." A wide-ranging dialogue between the Church and the modern world on human dignity, marriage, culture, economic life, and peace.'
        }
    ],

    /* ── KEY DOCTRINES IN BRIEF ── */
    coreDoctrines: [
        {
            title: 'The Trinity',
            text: 'One God in three Persons — Father, Son, and Holy Spirit — equal in glory, coeternal in majesty.'
        },
        {
            title: 'The Incarnation',
            text: 'The Son of God became man without ceasing to be God: true God and true man in one Person.'
        },
        {
            title: 'The Redemption',
            text: 'By his Passion, Death, and Resurrection, Christ redeemed humanity from sin and opened the gates of eternal life.'
        },
        {
            title: 'The Real Presence',
            text: 'In the Eucharist, the bread and wine truly become the Body and Blood of Christ — soul, divinity, and all.'
        },
        {
            title: 'Apostolic Succession',
            text: 'Bishops are the successors of the Apostles, ordained in unbroken line from Christ\'s own ordination.'
        },
        {
            title: 'The Communion of Saints',
            text: 'The Church on earth, the souls in purgatory, and the saints in heaven are joined in one Mystical Body.'
        },
        {
            title: 'Heaven, Hell, and Purgatory',
            text: 'After death the soul faces particular judgment: eternal life with God (heaven), eternal separation by free choice (hell), or purification before glory (purgatory).'
        },
        {
            title: 'Mary, Mother of God',
            text: 'Mary is truly the Mother of God (Theotokos), Immaculately conceived, ever-Virgin, and assumed into heaven.'
        }
    ]
};

if (typeof window !== 'undefined') window.DOCTRINE = DOCTRINE;
