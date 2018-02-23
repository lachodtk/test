#!groovy

pipeline {
  agent {
    docker {
      image 'node:6-alpine' 
      args '-p 3000:3000' 
    }
  }
  stages {

    stage('Build') {
      steps {
         sh 'pushd sampleWebApp; npm install; popd'
      }
    }

    stage('Test') {
      steps {
         sh 'npm test'
      }
    }

    stage('Docker Build') {
      agent any
      steps {
        sh 'docker build -t webapp .'
      }
    }
  }
}
