const {NFL} = require('../models')
const teams = ['Bills', 'Patriots', 'Jets', 'Dolphins', 'Chiefs', 'Chargers', 'Raiders', 'Broncos', 'Jaguars', 'Texans', 'Colts', 'Titans', 'Bengals', 'Ravens', 'Browns', 'Steelers', 'Eagles', 'Cowboys', 'Giants', 'Commanders', 'Niners', 'Rams', 'Seahawks', 'Cardinals', 'Saints', 'Buccaneers', 'Panthers', 'Falcons', 'Vikings', 'Packers', 'Lions', 'Bears'];
const types = ['/images/Quarterback.png', '/images/WideReceiver.png', '/images/RunningBack.png', '/images/TightEnd.png', '/images/DLinemen.png', '/images/Safety.png', '/images/Cornerback.png', '/images/Linebacker.png'];
const weaknessTypes = ['/images/Quarterback.png', '/images/WideReceiver.png', '/images/RunningBack.png', '/images/TightEnd.png', '/images/DLinemen.png', '/images/Safety.png', '/images/Cornerback.png', '/images/Linebacker.png'];
const resistanceTypes = ['/images/Quarterback.png', '/images/WideReceiver.png', '/images/RunningBack.png', '/images/TightEnd.png', '/images/DLinemen.png', '/images/Safety.png', '/images/Cornerback.png', '/images/Linebacker.png'];

module.exports.viewAll = async function(req, res) {
    let searchTypes = ['All'];
    for(let i=0; i<types.length; i++){
        searchTypes.push(types[i]);
    }
    let nfls;
    let searchType = req.query.type || 'All';
    let searchRandom = req.query.random || false;
    if (searchType==='All'){
        nfls = await NFL.findAll();
    } else {
        nfls = await NFL.findAll({
            where: {type: searchType
            }
        });
    }
    if (nfls.length > 0 && searchRandom) {
        let randomIndex = getRandomInt(nfls.length);
        nfls = [nfls[randomIndex]];
    }
    res.render('index', {nfls, types:searchTypes, searchType, searchRandom});
}

module.exports.renderEditForm = async function(req, res, next) {
    const nfl = await NFL.findByPk(
        req.params.id
    );
    res.render('edit', {nfl, teams, types, weaknessTypes, resistanceTypes})
}

module.exports.updateNFL = async function(req, res) {
    await NFL.update(
        {
            team: req.body.team,
            name: req.body.name,
            hp: req.body.hp,
            type: req.body.type,
            image: req.body.image,
            attackOne: req.body.attackOne,
            attackOneCost: req.body.attackOneCost,
            attackOneHP: req.body.attackOneHP,
            attackTwo: req.body.attackTwo,
            attackTwoCost: req.body.attackTwoCost,
            attackTwoHP: req.body.attackTwoHP,
            weaknessType: req.body.weaknessType,
            resistanceType: req.body.resistanceType
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.deleteNFL = async function(req, res) {
    await NFL.destroy(
        {
            where:
            {
                id: req.params.id
            }
    });
    res.redirect('/');
}

module.exports.renderAddForm = function(req, res) {
    const nfl = {
        team: teams[0],
        name: "",
        hp: 70,
        type: types[0],
        image: "",
        attackOne: "",
        attackOneCost: 1,
        attackOneHP: 30,
        attackTwo: "",
        attackTwoCost: 1,
        attackTwoHP: 30,
        weaknessType: weaknessTypes[0],
        resistanceType: resistanceTypes[0],
    };
    res.render('add', {nfl, teams, types, weaknessTypes, resistanceTypes });
}

module.exports.addNFL = async function(req, res) {
    await NFL.create(
        {
            team: req.body.team,
            name: req.body.name,
            hp: req.body.hp,
            type: req.body.type,
            image: req.body.image,
            attackOne: req.body.attackOne,
            attackOneCost: req.body.attackOneCost,
            attackOneHP: req.body.attackOneHP,
            attackTwo: req.body.attackTwo,
            attackTwoCost: req.body.attackTwoCost,
            attackTwoHP: req.body.attackTwoHP,
            weaknessType: req.body.weaknessType,
            resistanceType: req.body.resistanceType
        });
    res.redirect('/');
}
function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}