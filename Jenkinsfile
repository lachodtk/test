#!groovy

pipeline {
  agent none
  stages {

    /*stage('Test') {
      agent any
      steps {
         sh 'npm install ./sampleWebApp'
         sh 'npm test ./sampleWebApp'
      }
    }*/

    stage('Docker Build') {
      agent any
      steps {
        sh 'docker build -t samplewebapp_webapp ./sampleWebApp'
      }
    }
  }
}
