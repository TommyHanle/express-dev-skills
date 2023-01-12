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
    getOne,
    create,
    deleteOne,
    updateOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.proficient = false;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function updateOne(formData, id) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id);
    skill.skill = formData.skill
    if(formData.proficient) {
        skill.proficient = true
    } else {
        skill.proficient = false
    }
}