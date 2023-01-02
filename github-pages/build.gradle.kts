import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    val KOTLIN_VERSION = "1.7.22"
    kotlin("jvm") version KOTLIN_VERSION
    kotlin("plugin.jpa") version KOTLIN_VERSION
    kotlin("plugin.spring") version KOTLIN_VERSION

    id("org.springframework.boot") version "3.0.1"
    id("io.spring.dependency-management") version "1.1.0"
    application
}

group = "io.kmc"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-jersey")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
//    implementation("org.springframework.boot:spring-boot-starter")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")

    implementation("com.google.cloud:google-cloud-storage:2.16.0")

    implementation(kotlin("stdlib"))
    implementation(kotlin("reflect"))

    runtimeOnly("mysql:mysql-connector-java")

    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

application {
    mainClass.set("io.kmc.blog.BlogApplicationKt")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict", "-Xjvm-default=all")
        jvmTarget = "17"
    }
}

tasks.jar{
    manifest {
        attributes (mapOf (
            "Main-Class" to "io.kmc.blog.BlogApplicationKt"
            )
        )
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}

