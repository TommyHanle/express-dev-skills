const skills = [
    {id: 123456, skill: 'CSS Styling', proficient: true},
    {id: 123457, skill: 'DOM Manipulation', proficient: false},
    {id: 123458, skill: '.this Keyword', proficient: false},
    {id: 123459, skill: 'Browser Game Creating', proficient: true},
    {id: 123460, skill: 'Express', proficient: false},
    {id: 123461, skill: 'Understanding Everything', proficient: false}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
