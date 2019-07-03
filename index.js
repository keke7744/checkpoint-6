class Student extends Human{
    name;
    
    job;

    skills=[]
    
constructor(){

this.name='Achref'

this.job='Doctor'

this.skills=['coding','learning']
this.job='coder'
}


getJob(job) {
    this.job=job
}

leaveJob(){

    this.job=job
}
learnNewSkills(skill){
    this.skills.push(skill);
}
forgetSkills(){
    const skill= this.skills.skill(coding);
    delete this.skills[coding];

}

}


