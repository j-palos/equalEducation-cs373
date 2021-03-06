import React, {Component} from 'react';
import AboutTable from "../AboutTable";


class AboutHelper extends Component {

    constructor() {
        super();
        this.state = {
            loaded: false,
            names: []
        };
    }

    componentDidMount() {
        const email_dict = {
            "ryooit@utexas.edu": "Intae",
            "ryooit70@gmail.com": "Intae",
            "ksotengco@gmail.com": "Kyle",
            "prateek.kolhar@utexas.edu": "Prateek",
            "jesus.rpalos@gmail.com": "Jesus",
            "jpjessep@users.noreply.github.com": "Jesus",
            "harmonrky@gmail.com": "Andrew",
            "ubuntu@ip-172-31-30-122.us-west-2.compute.internal": "Andrew",
            "ailyndarlenne@gmail.com": "Ailyn"
        };

        const commit_dict = {
            "Intae": 0,
            "Kyle": 0,
            "Prateek": 0,
            "Jesus": 0,
            "Andrew": 0,
            "Ailyn": 0,
            "Total": 0
        };

        const issue_dict = {
            "Intae": 0,
            "Kyle": 0,
            "Prateek": 0,
            "Jesus": 0,
            "Andrew": 0,
            "Ailyn": 0,
            "Total": 0
        };

        const unit_dict = {
            "Intae": 25,
            "Kyle": 0,
            "Prateek": 12,
            "Jesus": 0,
            "Andrew": 6,
            "Ailyn": 14,
            "Total": 57
        }
        let nameArray = [];
        //fetch the data from the gitlab api and return as an object we can use later
        fetch('https://gitlab.com/api/v4/projects/8524331/repository/commits?per_page=100&page=1')
            .then(results => {
                return results.json();
            }).then(frontend_commits => {

            for (let i = 0; i < frontend_commits.length; i++) {
                let value = frontend_commits[i].author_email;
                if (email_dict[value]) {
                    commit_dict[email_dict[value]] += 1;
                    commit_dict["Total"] += 1;
                }
            }
            //todo Add in the gitlab data for issues and unit_test

        });

        fetch('https://gitlab.com/api/v4/projects/8524331/repository/commits?per_page=100&page=2')
            .then(results => {
                return results.json();
            }).then(frontend_commits => {

            for (let i = 0; i < frontend_commits.length; i++) {
                let value = frontend_commits[i].author_email;
                if (email_dict[value]) {
                    commit_dict[email_dict[value]] += 1;
                    commit_dict["Total"] += 1;
                }
            }
            //todo Add in the gitlab data for issues and unit_test

        });

        fetch('https://gitlab.com/api/v4/projects/8524331/repository/commits?per_page=100&page=3')
            .then(results => {
                return results.json();
            }).then(frontend_commits => {

            for (let i = 0; i < frontend_commits.length; i++) {
                let value = frontend_commits[i].author_email;
                if (email_dict[value]) {
                    commit_dict[email_dict[value]] += 1;
                    commit_dict["Total"] += 1;
                }
            }
            //todo Add in the gitlab data for issues and unit_test

        });

        fetch('https://gitlab.com/api/v4/projects/8524331/repository/commits?per_page=100&page=4')
            .then(results => {
                return results.json();
            }).then(frontend_commits => {

            for (let i = 0; i < frontend_commits.length; i++) {
                let value = frontend_commits[i].author_email;
                if (email_dict[value]) {
                    commit_dict[email_dict[value]] += 1;
                    commit_dict["Total"] += 1;
                }
            }
            //todo Add in the gitlab data for issues and unit_test

        });

        fetch('https://gitlab.com/api/v4/projects/8778058/repository/commits?per_page=100&page=1')
            .then(results => {
                return results.json();
            }).then(backend_commits => {

            for (let i = 0; i < backend_commits.length; i++) {
                let value = backend_commits[i].author_email;
                if (email_dict[value]) {
                    commit_dict[email_dict[value]] += 1;
                    commit_dict["Total"] += 1;
                }
            }
        });

        fetch('https://gitlab.com/api/v4/projects/8524331/issues?per_page=500')
            .then(results => {
                return results.json();
            }).then(issues => {

            for (let i = 0; i < issues.length; i++) {
                let value = issues[i].closed_by;
                let name = "";
                if (value != null) {
                    name = issues[i].closed_by.name;
                    let temp = name.split(" ");
                    name = temp[0];
                    issue_dict[name] += 1;
                    issue_dict["Total"] += 1;
                }
            }

            for (let name in commit_dict) {
                nameArray.push({
                    name: name,
                    commits: commit_dict[name],
                    issues: issue_dict[name],
                    unit_test: unit_dict[name],
                });
            }
            this.setState({
                names: nameArray,
                loaded: true
            })
        });
    }

    render() {
        if (this.state.loaded) {
            return (
                <AboutTable names={this.state.names}/>
            )
        }
        else {
            return (
                <div>
                </div>
            )
        }
    }
}

export default AboutHelper;
