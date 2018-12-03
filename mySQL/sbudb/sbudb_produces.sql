-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: sbudb
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `produces`
--

DROP TABLE IF EXISTS `produces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `produces` (
  `producer_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `salary` int(11) DEFAULT NULL,
  PRIMARY KEY (`producer_id`,`movie_id`),
  KEY `movie_id` (`movie_id`),
  CONSTRAINT `produces_ibfk_1` FOREIGN KEY (`producer_id`) REFERENCES `producers` (`producer_id`),
  CONSTRAINT `produces_ibfk_2` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produces`
--

LOCK TABLES `produces` WRITE;
/*!40000 ALTER TABLE `produces` DISABLE KEYS */;
INSERT INTO `produces` VALUES (40,2,NULL),(56,3,NULL),(171,8,NULL),(192,9,NULL),(282,10,NULL),(283,10,NULL),(471,18,NULL),(474,18,NULL),(594,21,NULL),(686,23,NULL),(698,23,NULL),(698,25,NULL),(698,33,NULL),(698,34,NULL),(698,35,NULL),(698,36,NULL),(698,37,NULL),(698,38,NULL),(698,39,NULL),(698,40,NULL),(698,41,NULL),(698,42,NULL),(698,43,NULL),(698,45,NULL),(698,46,NULL),(698,47,NULL),(698,49,NULL),(698,50,NULL),(698,51,NULL),(885,45,NULL),(896,2,NULL),(896,61,NULL),(1004,30,NULL),(1021,30,NULL),(1345,25,NULL),(1965,36,NULL),(1965,46,NULL),(1965,48,NULL),(2557,33,NULL),(2557,36,NULL),(2557,46,NULL),(2557,47,NULL),(2557,51,NULL),(2751,56,NULL),(2751,65,NULL),(2765,66,NULL),(2786,59,NULL),(2786,62,NULL),(2786,70,NULL),(2862,65,NULL),(2894,57,NULL),(2894,65,NULL),(2908,59,NULL),(2921,56,NULL),(2976,5,NULL),(2976,28,NULL),(2976,52,NULL),(2976,55,NULL),(2976,57,NULL),(2976,59,NULL),(2976,61,NULL),(2976,62,NULL),(2976,65,NULL),(2976,68,NULL),(3192,59,NULL),(3192,61,NULL),(3276,67,NULL),(3597,1,NULL),(3598,1,NULL),(3599,1,NULL),(3600,1,NULL),(3601,1,NULL),(3602,1,NULL),(3603,1,NULL),(3604,1,NULL),(3604,4,NULL),(3611,1,NULL),(3612,1,NULL),(3613,1,NULL),(3619,1,NULL),(3624,1,NULL),(3647,2,NULL),(3648,2,NULL),(3649,2,NULL),(3650,2,NULL),(3652,2,NULL),(3654,2,NULL),(3659,2,NULL),(3661,2,NULL),(3677,3,NULL),(3678,3,NULL),(3679,3,NULL),(3680,3,NULL),(3697,4,NULL),(3698,4,NULL),(3698,43,NULL),(3699,4,NULL),(3700,4,NULL),(3703,4,NULL),(3704,4,NULL),(3705,4,NULL),(3708,4,NULL),(3716,5,NULL),(3717,5,NULL),(3720,5,NULL),(3725,6,NULL),(3725,21,NULL),(3732,7,NULL),(3735,7,NULL),(3738,7,NULL),(3739,7,NULL),(3739,22,NULL),(3739,25,NULL),(3739,33,NULL),(3739,34,NULL),(3739,35,NULL),(3739,36,NULL),(3739,37,NULL),(3739,38,NULL),(3739,39,NULL),(3739,40,NULL),(3739,41,NULL),(3739,42,NULL),(3739,43,NULL),(3739,45,NULL),(3739,46,NULL),(3739,47,NULL),(3739,50,NULL),(3739,51,NULL),(3740,7,NULL),(3772,8,NULL),(3774,8,NULL),(3792,8,NULL),(3800,8,NULL),(3835,9,NULL),(3839,9,NULL),(3840,7,NULL),(3840,25,NULL),(3840,35,NULL),(3840,37,NULL),(3840,38,NULL),(3840,39,NULL),(3840,40,NULL),(3840,41,NULL),(3840,43,NULL),(3840,47,NULL),(3842,7,NULL),(3842,35,NULL),(3842,37,NULL),(3842,48,NULL),(3843,9,NULL),(3844,7,NULL),(3846,7,NULL),(3847,9,NULL),(3849,9,NULL),(3851,9,NULL),(3857,9,NULL),(3857,13,NULL),(3884,7,NULL),(3891,9,NULL),(3893,9,NULL),(3909,9,NULL),(3920,10,NULL),(3922,10,NULL),(3938,12,NULL),(3943,12,NULL),(3945,12,NULL),(3946,12,NULL),(3947,12,NULL),(3948,12,NULL),(3951,12,NULL),(3970,13,NULL),(3973,13,NULL),(3974,13,NULL),(3982,13,NULL),(3988,13,NULL),(4010,14,NULL),(4015,13,NULL),(4016,14,NULL),(4018,14,NULL),(4022,14,NULL),(4024,14,NULL),(4026,14,NULL),(4028,14,NULL),(4031,14,NULL),(4032,14,NULL),(4042,15,NULL),(4043,15,NULL),(4044,15,NULL),(4045,15,NULL),(4047,15,NULL),(4048,51,NULL),(4057,17,NULL),(4058,17,NULL),(4061,17,NULL),(4062,17,NULL),(4063,17,NULL),(4064,17,NULL),(4066,17,NULL),(4084,18,NULL),(4085,18,NULL),(4086,18,NULL),(4088,18,NULL),(4089,18,NULL),(4090,18,NULL),(4091,18,NULL),(4114,18,NULL),(4115,18,NULL),(4124,19,NULL),(4136,19,NULL),(4136,34,NULL),(4136,36,NULL),(4136,38,NULL),(4138,19,NULL),(4139,18,NULL),(4166,20,NULL),(4166,32,NULL),(4168,20,NULL),(4168,32,NULL),(4169,20,NULL),(4169,32,NULL),(4170,20,NULL),(4170,32,NULL),(4171,20,NULL),(4171,32,NULL),(4172,20,NULL),(4172,32,NULL),(4173,20,NULL),(4178,20,NULL),(4178,32,NULL),(4184,21,NULL),(4186,21,NULL),(4187,21,NULL),(4188,21,NULL),(4191,21,NULL),(4195,21,NULL),(4196,21,NULL),(4197,21,NULL),(4199,21,NULL),(4200,21,NULL),(4201,21,NULL),(4201,26,NULL),(4202,21,NULL),(4214,21,NULL),(4215,21,NULL),(4216,21,NULL),(4227,22,NULL),(4309,36,NULL),(4309,44,NULL),(4309,49,NULL),(4312,43,NULL),(4330,23,NULL),(4335,21,NULL),(4345,23,NULL),(4354,23,NULL),(4360,23,NULL),(4407,22,NULL),(4410,22,NULL),(4413,22,NULL),(4415,24,NULL),(4416,22,NULL),(4419,22,NULL),(4422,22,NULL),(4424,24,NULL),(4425,22,NULL),(4427,24,NULL),(4430,24,NULL),(4436,24,NULL),(4442,24,NULL),(4454,24,NULL),(4503,33,NULL),(4503,34,NULL),(4503,35,NULL),(4503,36,NULL),(4503,37,NULL),(4503,38,NULL),(4503,39,NULL),(4503,40,NULL),(4503,41,NULL),(4503,42,NULL),(4503,43,NULL),(4503,45,NULL),(4503,46,NULL),(4503,47,NULL),(4503,48,NULL),(4503,49,NULL),(4503,50,NULL),(4503,51,NULL),(4515,25,NULL),(4515,33,NULL),(4515,34,NULL),(4515,35,NULL),(4515,36,NULL),(4515,37,NULL),(4515,39,NULL),(4515,40,NULL),(4515,41,NULL),(4515,42,NULL),(4515,45,NULL),(4515,46,NULL),(4515,47,NULL),(4515,48,NULL),(4515,50,NULL),(4515,51,NULL),(4519,25,NULL),(4519,33,NULL),(4519,34,NULL),(4519,35,NULL),(4519,36,NULL),(4519,37,NULL),(4519,39,NULL),(4519,40,NULL),(4519,41,NULL),(4519,42,NULL),(4519,45,NULL),(4519,46,NULL),(4519,47,NULL),(4519,50,NULL),(4519,51,NULL),(4521,25,NULL),(4521,34,NULL),(4521,36,NULL),(4521,40,NULL),(4521,41,NULL),(4521,45,NULL),(4521,46,NULL),(4521,47,NULL),(4521,48,NULL),(4521,50,NULL),(4521,51,NULL),(4545,25,NULL),(4545,33,NULL),(4545,38,NULL),(4545,40,NULL),(4545,50,NULL),(4545,51,NULL),(4563,25,NULL),(4563,48,NULL),(4565,25,NULL),(4567,25,NULL),(4567,41,NULL),(4569,25,NULL),(4569,41,NULL),(4585,26,NULL),(4599,23,NULL),(4602,23,NULL),(4605,23,NULL),(4606,26,NULL),(4608,23,NULL),(4611,23,NULL),(4612,26,NULL),(4614,23,NULL),(4615,26,NULL),(4617,23,NULL),(4618,26,NULL),(4620,23,NULL),(4621,26,NULL),(4623,23,NULL),(4624,26,NULL),(4626,23,NULL),(4627,26,NULL),(4629,23,NULL),(4630,26,NULL),(4633,26,NULL),(4635,23,NULL),(4636,26,NULL),(4638,23,NULL),(4639,26,NULL),(4641,23,NULL),(4644,23,NULL),(4647,23,NULL),(4650,23,NULL),(4653,23,NULL),(4656,23,NULL),(4659,23,NULL),(4660,26,NULL),(4662,23,NULL),(4665,23,NULL),(4668,23,NULL),(4671,23,NULL),(4672,26,NULL),(4674,23,NULL),(4675,26,NULL),(4677,23,NULL),(4680,23,NULL),(4683,23,NULL),(4684,26,NULL),(4686,23,NULL),(4687,26,NULL),(4708,27,NULL),(4712,27,NULL),(4719,26,NULL),(4723,26,NULL),(4744,27,NULL),(4754,23,NULL),(4756,27,NULL),(4759,26,NULL),(4760,27,NULL),(4763,26,NULL),(4764,27,NULL),(4785,25,NULL),(4787,26,NULL),(4789,25,NULL),(4789,39,NULL),(4789,40,NULL),(4793,25,NULL),(4793,39,NULL),(4793,40,NULL),(4795,26,NULL),(4801,25,NULL),(4805,25,NULL),(4805,35,NULL),(4805,37,NULL),(4859,26,NULL),(4863,26,NULL),(4868,26,NULL),(4873,26,NULL),(4884,28,NULL),(4884,52,NULL),(4884,65,NULL),(4889,28,NULL),(4889,52,NULL),(4889,55,NULL),(4894,28,NULL),(4894,52,NULL),(4894,53,NULL),(4894,56,NULL),(4894,59,NULL),(4894,65,NULL),(4894,68,NULL),(4899,28,NULL),(4899,52,NULL),(4899,55,NULL),(4899,56,NULL),(4899,59,NULL),(4899,61,NULL),(4899,62,NULL),(4899,64,NULL),(4899,65,NULL),(4899,68,NULL),(4899,70,NULL),(4949,28,NULL),(4949,52,NULL),(4949,54,NULL),(4949,56,NULL),(4949,68,NULL),(4949,69,NULL),(5004,28,NULL),(5004,52,NULL),(5055,27,NULL),(5061,27,NULL),(5065,28,NULL),(5065,52,NULL),(5066,29,NULL),(5067,27,NULL),(5079,27,NULL),(5084,29,NULL),(5085,27,NULL),(5090,29,NULL),(5102,29,NULL),(5108,29,NULL),(5114,29,NULL),(5125,28,NULL),(5125,52,NULL),(5132,29,NULL),(5150,29,NULL),(5156,29,NULL),(5162,29,NULL),(5163,27,NULL),(5168,27,NULL),(5173,27,NULL),(5177,28,NULL),(5177,52,NULL),(5177,54,NULL),(5177,57,NULL),(5177,69,NULL),(5178,27,NULL),(5182,28,NULL),(5182,52,NULL),(5182,67,NULL),(5183,27,NULL),(5192,28,NULL),(5192,52,NULL),(5193,27,NULL),(5197,28,NULL),(5197,52,NULL),(5198,27,NULL),(5202,28,NULL),(5202,52,NULL),(5203,27,NULL),(5207,28,NULL),(5207,52,NULL),(5208,27,NULL),(5212,28,NULL),(5212,52,NULL),(5213,27,NULL),(5217,28,NULL),(5217,52,NULL),(5218,27,NULL),(5223,27,NULL),(5228,27,NULL),(5279,28,NULL),(5279,52,NULL),(5284,28,NULL),(5284,52,NULL),(5297,30,NULL),(5327,30,NULL),(5476,31,NULL),(5498,25,NULL),(5500,31,NULL),(5504,25,NULL),(5506,31,NULL),(5511,31,NULL),(5520,31,NULL),(5523,31,NULL),(5526,31,NULL),(5584,30,NULL),(5605,29,NULL),(5605,53,NULL),(5645,32,NULL),(5671,32,NULL),(5712,33,NULL),(5712,46,NULL),(5712,47,NULL),(5718,33,NULL),(5718,39,NULL),(5718,40,NULL),(5718,41,NULL),(5881,32,NULL),(5885,32,NULL),(5903,32,NULL),(5906,32,NULL),(5921,32,NULL),(5921,48,NULL),(5924,32,NULL),(5949,34,NULL),(5949,35,NULL),(5949,41,NULL),(5949,45,NULL),(5949,47,NULL),(5952,34,NULL),(5952,38,NULL),(5952,45,NULL),(5971,41,NULL),(6006,34,NULL),(6006,39,NULL),(6009,34,NULL),(6009,39,NULL),(6018,34,NULL),(6032,35,NULL),(6044,35,NULL),(6044,40,NULL),(6044,50,NULL),(6082,36,NULL),(6145,34,NULL),(6149,34,NULL),(6154,36,NULL),(6154,42,NULL),(6154,48,NULL),(6154,51,NULL),(6165,34,NULL),(6177,34,NULL),(6181,34,NULL),(6185,34,NULL),(6189,34,NULL),(6193,34,NULL),(6209,34,NULL),(6210,36,NULL),(6210,43,NULL),(6213,34,NULL),(6214,36,NULL),(6214,43,NULL),(6233,45,NULL),(6254,35,NULL),(6259,35,NULL),(6264,35,NULL),(6274,35,NULL),(6313,37,NULL),(6328,37,NULL),(6353,37,NULL),(6363,37,NULL),(6368,37,NULL),(6368,41,NULL),(6398,37,NULL),(6408,37,NULL),(6415,38,NULL),(6415,47,NULL),(6417,39,NULL),(6417,41,NULL),(6417,63,NULL),(6419,35,NULL),(6425,38,NULL),(6558,38,NULL),(6570,40,NULL),(6570,42,NULL),(6702,37,NULL),(6708,37,NULL),(6714,37,NULL),(6720,37,NULL),(6720,51,NULL),(6726,37,NULL),(6778,39,NULL),(6827,38,NULL),(6833,38,NULL),(6907,38,NULL),(6907,47,NULL),(6990,40,NULL),(6995,40,NULL),(7000,40,NULL),(7118,40,NULL),(7122,38,NULL),(7157,41,NULL),(7292,41,NULL),(7292,50,NULL),(7347,42,NULL),(7347,51,NULL),(7435,42,NULL),(7465,40,NULL),(7525,43,NULL),(7548,41,NULL),(7561,43,NULL),(7571,36,NULL),(7574,36,NULL),(7577,36,NULL),(7583,36,NULL),(7586,36,NULL),(7589,36,NULL),(7592,36,NULL),(7595,36,NULL),(7598,36,NULL),(7601,36,NULL),(7607,36,NULL),(7610,36,NULL),(7611,41,NULL),(7613,36,NULL),(7616,36,NULL),(7620,36,NULL),(7683,43,NULL),(7781,45,NULL),(7781,51,NULL),(7809,45,NULL),(7809,51,NULL),(7815,45,NULL),(7874,46,NULL),(7878,46,NULL),(7880,46,NULL),(7960,47,NULL),(7961,47,NULL),(7985,48,NULL),(8069,49,NULL),(8077,49,NULL),(8134,47,NULL),(8144,48,NULL),(8147,48,NULL),(8150,48,NULL),(8154,48,NULL),(8158,48,NULL),(8160,48,NULL),(8166,48,NULL),(8170,48,NULL),(8172,48,NULL),(8174,48,NULL),(8176,48,NULL),(8178,48,NULL),(8226,51,NULL),(8254,51,NULL),(8255,51,NULL),(8357,68,NULL),(8449,51,NULL),(8453,55,NULL),(8453,56,NULL),(8455,52,NULL),(8458,52,NULL),(8462,52,NULL),(8504,56,NULL),(8504,67,NULL),(8511,64,NULL),(8511,70,NULL),(8515,57,NULL),(8524,56,NULL),(8524,68,NULL),(8528,56,NULL),(8528,68,NULL),(8536,56,NULL),(8540,56,NULL),(8540,67,NULL),(8544,56,NULL),(8647,56,NULL),(8655,55,NULL),(8655,61,NULL),(8655,70,NULL),(8659,55,NULL),(8659,61,NULL),(8659,65,NULL),(8663,55,NULL),(8663,61,NULL),(8671,55,NULL),(8837,56,NULL),(8837,59,NULL),(8838,55,NULL),(8838,61,NULL),(8845,59,NULL),(8858,66,NULL),(8865,54,NULL),(8865,58,NULL),(8865,67,NULL),(8870,54,NULL),(8870,58,NULL),(8870,67,NULL),(8875,54,NULL),(8875,58,NULL),(8875,67,NULL),(8880,54,NULL),(8880,58,NULL),(8885,58,NULL),(8890,54,NULL),(8890,58,NULL),(8893,55,NULL),(8893,60,NULL),(8893,65,NULL),(8895,54,NULL),(8895,58,NULL),(8898,55,NULL),(8898,61,NULL),(8900,54,NULL),(8900,58,NULL),(8905,54,NULL),(8905,58,NULL),(8910,54,NULL),(8910,58,NULL),(8915,54,NULL),(8915,62,NULL),(8920,54,NULL),(8925,54,NULL),(8930,54,NULL),(8930,58,NULL),(8930,68,NULL),(8934,63,NULL),(8935,54,NULL),(8935,58,NULL),(8940,54,NULL),(8940,58,NULL),(8942,56,NULL),(8942,67,NULL),(8944,62,NULL),(8945,54,NULL),(8945,58,NULL),(8945,68,NULL),(8947,56,NULL),(8948,60,NULL),(8950,54,NULL),(8950,58,NULL),(8950,68,NULL),(8955,54,NULL),(8955,58,NULL),(8955,68,NULL),(8960,54,NULL),(8960,58,NULL),(8960,68,NULL),(8965,54,NULL),(8965,58,NULL),(8971,54,NULL),(8971,58,NULL),(8971,63,NULL),(8971,68,NULL),(8977,54,NULL),(8977,58,NULL),(9097,57,NULL),(9097,68,NULL),(9130,56,NULL),(9130,68,NULL),(9136,56,NULL),(9154,56,NULL),(9166,56,NULL),(9224,66,NULL),(9269,69,NULL),(9276,54,NULL),(9296,70,NULL),(9318,69,NULL),(9330,54,NULL),(9335,54,NULL),(9340,54,NULL),(9340,57,NULL),(9340,67,NULL),(9346,59,NULL),(9350,54,NULL),(9355,54,NULL),(9355,57,NULL),(9355,68,NULL),(9399,61,NULL),(9413,66,NULL),(9451,59,NULL),(9462,66,NULL),(9628,71,NULL),(9656,63,NULL),(9729,59,NULL),(9911,59,NULL),(9918,59,NULL),(9925,59,NULL),(9935,66,NULL),(9990,57,NULL),(10011,68,NULL),(10044,61,NULL),(10164,61,NULL),(10180,61,NULL),(10205,58,NULL),(10213,58,NULL),(10249,59,NULL),(10249,61,NULL),(10428,58,NULL),(10485,60,NULL),(10491,60,NULL),(10491,69,NULL),(10497,60,NULL),(10497,69,NULL),(10726,62,NULL),(10738,62,NULL),(10744,62,NULL),(10855,61,NULL),(11140,61,NULL),(11224,61,NULL),(11273,61,NULL),(11334,66,NULL),(11583,67,NULL),(12053,68,NULL),(12192,62,NULL),(12204,64,NULL),(12303,67,NULL),(12372,66,NULL),(12372,69,NULL),(12722,63,NULL),(13103,66,NULL),(13197,69,NULL),(13338,67,NULL),(13347,69,NULL),(13351,69,NULL),(13355,69,NULL),(13359,69,NULL),(13367,69,NULL),(13371,69,NULL),(13649,71,NULL),(13650,71,NULL);
/*!40000 ALTER TABLE `produces` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-02 22:37:48
