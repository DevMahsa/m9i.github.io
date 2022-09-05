---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
---
We've made some good progress, but the journey is just getting started. Recently, Artifactory stuff has statrted growing on me. Specially binarystore and the way it's managing data. When an Artifactory user "deletes" a file, what is actually deleted is the reference from the Artifactory database to the physical file. Before actually deleting a file Artifactory must scan the system to ensure that there are no other users referencing the file. Scanning the system is very CPU intensive, and locks files while the scan is in process, and this may stress the development environment. Therefore this can be scheduled to run periodically as a "Garbage Collection" process during times when demands on the system are low.

