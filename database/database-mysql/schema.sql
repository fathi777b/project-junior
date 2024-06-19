-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema happyHouse
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema happyHouse
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `happyHouse` ;
-- -----------------------------------------------------
-- Schema happyhouse
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema happyhouse
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `happyhouse` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `happyHouse` ;

-- -----------------------------------------------------
-- Table `happyHouse`.`house`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyHouse`.`house` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(2000) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `url-img` VARCHAR(12000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

USE `happyhouse` ;

-- -----------------------------------------------------
-- Table `happyhouse`.`house`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `happyhouse`.`house` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(2000) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `img` VARCHAR(14000) NOT NULL,
  `housecol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
