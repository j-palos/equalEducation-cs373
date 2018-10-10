const profile = {
    "Intae" : " I’m a senior at UTCS from Daegu, South Korea. I’m interested in machine learning and trading. I hope I could find alpha by utilizing machine learning. Responsibilities: I was responsible for the front-end design and documentation.",
    "Kyle" : "I'm a senior at UTCS from La Marque, Texas. I'm interested in game development and hope to have my own game company one day! Responsibilities: I was responsible for the front-end design and documentation.",
    "Prateek" : "I’m a Masters student at UTCS. I’m interested in NLP and CV. Responsibilities: I am responsible for the back-end development and API design.",
    "Andrew" : "I’m a senior at UTCS from Richmond, Kentucky. I’m interested in cloud computing and GIS mapping. Responsibilities: I am responsible for back-end development and operations.",
    "Jesus" : "I'm A senior at UTCS, from around. I'm interested in full stack and cyber security. Responsibilities:I have mostly been responsible for setting up react ",
};

fetch('https://gitlab.com/api/v4/projects/8524331/repository/contributors')
    .then(results => {
        return results.json();
    }).then(data => {

    console.log(data);
    // debugger;
    let email_dict = {
        "ryooit@utexas.edu": "Intae",
        "ryooit70@gmail.com": "Intae",
        "ksotengco@gmail.com": "Kyle",
        "prateek.kolhar@utexas.edu": "Prateek",
        "jesus.rpalos@gmail.com": "Jesus",
        "jpjessep@users.noreply.github.com": "Jesus",
        // Add Andrew
    };

    let counter_dict = {
        "Intae": 0,
        "Kyle": 0,
        "Prateek": 0,
        "Jesus": 0,
        "Andrew": 0,
    };
    for (let i = 0; i < data.length; i++) {
        let value = data[i].email;
        counter_dict[email_dict[value]] += data[i].commits;
    }

    console.log(counter_dict);

    // debugger;
    let nameArray = [{}];
    for (let name in counter_dict) {
        if (name) {
            nameArray.push({
                name: name,
                commits: counter_dict[name],
                issues: 0,
                unit_test: 0,
            });
        }
    }
    console.log("state:", nameArray);
    this.setState({names: nameArray, done_names : true});
})
