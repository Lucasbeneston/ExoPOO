class Employe {
    constructor(matricule, nom, prenom, dateNaissance, dateEmbauche, salaire) {
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.dateEmbauche = dateEmbauche;
        this.salaire = salaire;
    }

    // Age de l'utilisateur
    get age() {
        let dateNaissance = new Date(this.dateNaissance);
        let dateActuelle = Date.now();
        // différence des heures
        let timeDiff = dateActuelle - dateNaissance.getTime();
        // différence de jours
        let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        // afficher la différence
        return age;
    }

    //  l'Anciennetée de l'utilisateur
    get anciennete() {
        let dateEmbauche = new Date(this.dateEmbauche);
        let dateActuelle = Date.now();
        // différence des heures
        let timeDiff = dateActuelle - dateEmbauche.getTime();
        // différence de jours
        let anciennete = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        // afficher la différence
        return anciennete;
    }

    // Augmente le salaire de l’employé en prenant en considération l’ancienneté
    augmenterSalaireByAnciennete() {
        if (this.anciennete < 5) {
            return this.salaire * 1.02 //(1 + (2/100))
        } else if (this.anciennete < 10) {
            return this.salaire * 1.05
        } else {
            return this.salaire * 1.10
        }
    }

    // Affiche les informations de l’employé
    afficherEmployé() {
        return `
    Matricule :    ${this.matricule}
    Nom complet :  ${this.nom.toUpperCase()} ${this.prenom[0].toUpperCase()}${this.prenom.slice(1).toLowerCase()}
    Age :          ${this.age} ans
    Ancienneté :   ${this.anciennete}
    Salaire :      ${this.augmenterSalaireByAnciennete()}`
    }

}


const Lucas = new Employe(1, 'Beneston', 'luCas', '12/11/1994', '09/03/2018', 4000)
    // console.log(Lucas.age);
    // console.log(Lucas.anciennete);
    // console.log(Lucas.augmenterSalaireByAnciennete());
    // console.log(Lucas.afficherEmployé());
    // console.log(Lucas.prenom.slice(1))







// const myForm = document.getElementById('le-formulaire');

// // Récupérer input du formulaire

// function getInputs(event) {
//     event.preventDefault();

//     const leMatricule = myForm.querySelector('[name=matricule]').value;
//     const leNom = myForm.querySelector('[name=nom]').value;
//     const lePrenom = myForm.querySelector('[name=prenom]').value;
//     const laNaissance = myForm.querySelector('[name=naissance]').value;
//     const lEmbauche = myForm.querySelector('[name=embauche]').value;
//     const leSalaire = myForm.querySelector('[name=salaire]').value;

// // Création des objets via la classe
//     class Employé {
//         constructor(matricule, nom, prénom, dateNaissance, dateEmbauche, salaire) {
//             this.matricule = matricule;
//             this.nom = nom;
//             this.prenom = prénom;
//             this.dateNaissance = dateNaissance;
//             this.dateEmbauche = dateEmbauche;
//             this.salaire = salaire
//         }

//         get Age() {
//             var diff = Date.now() - new Date(this.dateNaissance).getTime();
//             var age = new Date(diff); 
//             return Math.abs(age.getUTCFullYear() - 1970);
//         }

//         get Anciennete() {
//             var diff = Date.now() - new Date(this.dateEmbauche).getTime();
//             var embauche = new Date(diff); 
//             return Math.abs(embauche.getUTCFullYear() - 1970);
//         }

//         AugmenterSalaireByAnciennete() {
//             if (this.Anciennete < 5) {
//                 return this.salaire * 1.02;
//             } else if (this.Anciennete < 10) {
//                 return this.salaire * 1.05;
//             } else {
//                 return this.salaire * 1.1;
//             }
//         }

//         AfficherEmploye() {
//             return `Matricule : ${this.matricule}
//             Nom complet : ${this.nom.toUpperCase()} ${this.prenom[0].toUpperCase()}${this.prenom.slice(1)}
//             Age : ${this.Age} ans
//             Ancienneté : ${this.Anciennete} ans
//             Salaire : ${this.AugmenterSalaireByAnciennete()}€`
//         }
//     }

//     const nouvelObjet = new Employé(leMatricule, leNom, lePrenom, laNaissance, lEmbauche, leSalaire);

//     console.log(nouvelObjet.AfficherEmploye());
// }

// myForm.addEventListener('submit', getInputs);