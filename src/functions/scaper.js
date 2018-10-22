


const getGitLabData = () => {

    let nameArray = [];
    //fetch the data from the gitlab api and return as an object we can use later
    fetch('https://gitlab.com/api/v4/projects/8524331/repository/contributors')
        .then(results => {
            return results.json();
        }).then(data => {
        let email_dict = {
            "ryooit@utexas.edu": "Intae",
            "ryooit70@gmail.com": "Intae",
            "ksotengco@gmail.com": "Kyle",
            "prateek.kolhar@utexas.edu": "Prateek",
            "jesus.rpalos@gmail.com": "Jesus",
            "jpjessep@users.noreply.github.com": "Jesus"
            //todo ADD Andrew
        };
        let counter_dict = {
            "Intae": 0,
            "Kyle": 0,
            "Prateek": 0,
            "Jesus": 0,
            "Andrew": 0
        };
        for (let i = 0; i < data.length; i++) {
            let value = data[i].email;
            if (email_dict[value]) {
                counter_dict[email_dict[value]] += data[i].commits;
            }
        }

        for (let name in counter_dict) {
            nameArray.push({
                name: name,
                commits: counter_dict[name],
                issues: 0,
                unit_test: 0,
            });
        }
    });
    return nameArray;
};

export default getGitLabData()