#!groovy

pipeline {
  agent none
  stages {

    stage('Build and Test') {
      agent {
        docker {
          image 'node:6-alpine' 
          args '-p 3000:3000' 
        }
      }
      steps {
         sh 'npm install'
         sh 'npm test'
      }
    }
//commit
    stage('Docker Build') {
      agent any
      steps {
        sh 'docker build -t webapp .'
      }
    }
  }
}
