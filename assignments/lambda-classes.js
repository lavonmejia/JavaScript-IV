// CODE here for your Lambda Classes


class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age;
    }
        speak() { (console.log (`Hello my name is ${this.name}, I am from ${this.location}`));
    }
};

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.favLanguage = attributes.favLanguage;
        this.specialty = attributes.specialty;
        this.catchPhrase = attributes.catchPhrase;
        }
        demo(subject) { (console.log (`Today we are learning about ${subject}`));
        }
        grade(student, subject) { (console.log (`${student.name} receives a perfect score on ${subject}`));
    }
    };

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.listsSubjects = attributes.listsSubjects;
        }
            PRAssignment(subject) { (console.log(`${this.name} has submitted a PR for ${subject}`));
                } 
            sprintChallenge(subject){ (console.log (`${this.name} has begun sprint challenge on ${subject}`));     
                }
    };

    class ProjectManagers extends Instructor {
        constructor(attributes) {
            super(attributes);
            this.gradClassName = attributes.gradClassName;
            this.favInstructor = attributes.favInstructor;
            }
            standUp(slackChannel) { (console.log(`${this.name} announces to ${slackChannel}, @channel standy times`));
                    } 
            debugsCode(student,subject){ (console.log (`${this.name} debugs ${student.name}'s code on ${subject}`));     
                    }
        };


        const rafael = new Instructor({
            name: 'Rafael',
            location: 'Samana',
            age: 35,
            favLanguage: 'Python',
            specialty: 'Front-end',
            catchPhrase: `All others bring data`
          });

          const fred = new Instructor({
            name: 'Fred',
            location: 'Bedrock',
            age: 37,
            favLanguage: 'JavaScript',
            specialty: 'Front-end',
            catchPhrase: `Don't forget the homies`
          });


          const zoe = new Instructor({
            name: 'Zoe',
            location: 'Southfield',
            age: 2,
            favLanguage: 'C++',
            specialty: 'Back-end',
            catchPhrase: `Thank you bye bye`
          });

          const audrey = new Student({
            name: 'Audrey',
            location: 'New York',
            age: 5,
            favLanguage: 'Java',
            specialty: 'Android',
            catchPhrase: `Heaven is in the clouds`
          });


          const cecil = new Student({
            name: 'Cecil',
            location: 'Detroit',
            age: 57,
            favLanguage: 'Swift',
            specialty: 'iOS',
            catchPhrase: `Back in my day we actually talked to each other`
          });




          
        rafael.demo("iOS");
        rafael.grade(cecil, "Swift")