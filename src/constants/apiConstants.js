export const categoryFilter = [
     {value :'Youth Education',label : 'Youth Education'},
     {value :'Early Childhood',label : 'Early Childhood'}];

export const povertyFilter = [
    {value :'Moderate', label : 'Moderate'},
    {value :'Severe',  label : 'Severe'},
    {value :'Extreme', label :'Extreme'}];

export const scopeFilter = [
    {value : 'Regional', label : 'Regional'},
    {value:  'National', label:'National'}];

// export const stateFilter = [
//     'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
// ];

export const stateFilter = [
    {value :'Alabama', label : 'Alabama'},
    {value :'Alaska', label : 'Alaska'},
    {value :'Arizona', label : 'Arizona'},
    {value :'Arkansas', label : 'Arkansas'},
    {value :'California', label : 'California'},
    {value :'Colorado', label : 'Colorado'},
    {value :'Connecticut', label : 'Connecticut'},
    {value :'Delaware', label : 'Delaware'},
    {value :'Florida', label : 'Florida'},
    {value :'Georgia', label : 'Georgia'},
    {value :'Hawaii', label : 'Hawaii'},
    {value :'Idaho', label : 'Idaho'},
    {value :'Illinois', label : 'Illinois'},
    {value :'Indiana', label : 'Indiana'},
    {value :'Iowa', label : 'Iowa'},
    {value :'Kansas', label : 'Kansas'},
    {value :'Kentucky', label : 'Kentucky'},
    {value :'Louisiana', label : 'Louisiana'},
    {value :'Maine', label : 'Maine'},
    {value :'Maryland', label : 'Maryland'},
    {value :'Massachusetts', label : 'Massachusetts'},
    {value :'Michigan', label : 'Michigan'},
    {value :'Minnesota', label : 'Minnesota'},
    {value :'Mississippi', label : 'Mississippi'},
    {value :'Missouri', label : 'Missouri'},
    {value :'Montana', label : 'Montana'},
    {value :'Nebraska', label : 'Nebraska'},
    {value :'Nevada', label : 'Nevada'},
    {value :'New Hampshire', label : 'New Hampshire'},
    {value :'New Jersey', label : 'New Jersey'},
    {value :'New Mexico', label : 'New Mexico'},
    {value :'New York', label : 'New York'},
    {value :'North Carolina', label : 'North Carolina'},
    {value :'North Dakota', label : 'North Dakota'},
    {value :'Ohio', label : 'Ohio'},
    {value :'Oklahoma', label : 'Oklahoma'},
    {value :'Oregon', label : 'Oregon'},
    {value :'Pennsylvania', label : 'Pennsylvania'},
    {value :'Rhode Island', label : 'Rhode Island'},
    {value :'South Carolina', label : 'South Carolina'},
    {value :'South Dakota', label : 'South Dakota'},
    {value :'Tennessee', label : 'Tennessee'},
    {value :'Texas', label : 'Texas'},
    {value :'Utah', label : 'Utah'},
    {value :'Vermont', label : 'Vermont'},
    {value :'Virginia', label : 'Virginia'},
    {value :'Washington', label : 'Washington'},
    {value :'West Virginia', label : 'West Virginia'},
    {value :'Wisconsin', label : 'Wisconsin'},
    {value :'Wyoming', label : 'Wyoming'}
];
export const populationFilter = ['Small', 'Medium', 'Large'];

const nameSort = {value : 'Name', label : 'Name'};
const povertySort = {value : 'Poverty', label:'Poverty'};
const ratingSort = {value : 'Rating', label:'Rating'};
const populationSort = {value : 'Population', label:'Population'};

export const sortables =
    {
        community: {'Name':nameSort, 'Population' : populationSort},
        school: {'Name':nameSort, 'Poverty':povertySort, 'Population':populationSort},
        charity: {'Name':nameSort, 'Rating':ratingSort}
    };

export const filterables =
    {
        community: {'State': categoryFilter, 'Population': populationFilter},
        school: {'State': stateFilter, 'Population': populationFilter, 'Poverty': povertyFilter},
        charity: {'State': stateFilter, 'Scope': scopeFilter, 'Category': categoryFilter}
    };


export const states_hash =
    {
        'Alabama': 'AL',
        'Alaska': 'AK',
        'American Samoa': 'AS',
        'Arizona': 'AZ',
        'Arkansas': 'AR',
        'California': 'CA',
        'Colorado': 'CO',
        'Connecticut': 'CT',
        'Delaware': 'DE',
        'Florida': 'FL',
        'Georgia': 'GA',
        'Guam': 'GU',
        'Hawaii': 'HI',
        'Idaho': 'ID',
        'Illinois': 'IL',
        'Indiana': 'IN',
        'Iowa': 'IA',
        'Kansas': 'KS',
        'Kentucky': 'KY',
        'Louisiana': 'LA',
        'Maine': 'ME',
        'Marshall Islands': 'MH',
        'Maryland': 'MD',
        'Massachusetts': 'MA',
        'Michigan': 'MI',
        'Minnesota': 'MN',
        'Mississippi': 'MS',
        'Missouri': 'MO',
        'Montana': 'MT',
        'Nebraska': 'NE',
        'Nevada': 'NV',
        'New Hampshire': 'NH',
        'New Jersey': 'NJ',
        'New Mexico': 'NM',
        'New York': 'NY',
        'North Carolina': 'NC',
        'North Dakota': 'ND',
        'Northern Mariana Islands': 'MP',
        'Ohio': 'OH',
        'Oklahoma': 'OK',
        'Oregon': 'OR',
        'Palau': 'PW',
        'Pennsylvania': 'PA',
        'Puerto Rico': 'PR',
        'Rhode Island': 'RI',
        'South Carolina': 'SC',
        'South Dakota': 'SD',
        'Tennessee': 'TN',
        'Texas': 'TX',
        'Utah': 'UT',
        'Vermont': 'VT',
        'Virgin Islands': 'VI',
        'Virginia': 'VA',
        'Washington': 'WA',
        'West Virginia': 'WV',
        'Wisconsin': 'WI',
        'Wyoming': 'WY'
    };
