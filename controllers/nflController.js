module.exports.viewAll = function(req, res, next) {
    const nfl = {
        id: 1,
        position: 'qb',
        name: 'Josh Allen',
        hp: 85,
        type: '/images/Quarterback.png',
        image: '/images/JoshAllen.png',
        attackOne: 'Quarterback Rush',
        attackOneCost: 1,
        attackOneHP: 40,
        attackTwo: 'Hail Mary',
        attackTwoCost: 2,
        attackTwoHP: 60,
        weaknessType: '/images/DLinemen.png',
        resistanceType: '/images/Safety.png',
    };
    res.render('index', {nfl});
}