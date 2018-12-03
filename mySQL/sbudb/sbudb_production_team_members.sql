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
-- Table structure for table `production_team_members`
--

DROP TABLE IF EXISTS `production_team_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `production_team_members` (
  `production_team_member_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`production_team_member_id`),
  CONSTRAINT `production_team_members_ibfk_1` FOREIGN KEY (`production_team_member_id`) REFERENCES `person` (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23940 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `production_team_members`
--

LOCK TABLES `production_team_members` WRITE;
/*!40000 ALTER TABLE `production_team_members` DISABLE KEYS */;
INSERT INTO `production_team_members` VALUES (37),(56),(103),(133),(171),(283),(698),(770),(878),(896),(967),(968),(978),(979),(986),(1006),(1109),(1217),(1345),(1354),(1462),(1538),(1838),(1839),(1904),(1940),(1942),(2143),(2291),(2595),(2598),(2722),(2725),(2736),(2749),(2750),(2751),(2753),(2765),(2768),(2771),(2773),(2786),(2839),(2842),(2862),(2881),(2883),(2887),(2888),(2894),(2896),(2898),(2899),(2900),(2901),(2902),(2904),(2905),(2906),(2908),(2909),(2910),(2911),(2912),(2913),(2916),(2921),(2922),(2923),(2932),(2933),(2976),(3020),(3046),(3060),(3064),(3092),(3093),(3102),(3161),(3162),(3166),(3192),(3193),(3216),(3236),(3238),(3239),(3297),(3329),(3386),(3422),(3475),(3483),(3484),(3498),(3566),(3587),(3595),(3596),(3601),(3605),(3606),(3607),(3608),(3609),(3610),(3613),(3616),(3617),(3620),(3626),(3627),(3628),(3629),(3630),(3631),(3632),(3633),(3634),(3635),(3637),(3638),(3639),(3640),(3641),(3642),(3643),(3644),(3646),(3653),(3657),(3658),(3660),(3662),(3663),(3664),(3665),(3666),(3667),(3668),(3669),(3670),(3671),(3672),(3675),(3681),(3682),(3683),(3684),(3685),(3686),(3687),(3688),(3689),(3690),(3691),(3693),(3694),(3695),(3696),(3700),(3701),(3702),(3706),(3707),(3710),(3718),(3719),(3722),(3724),(3725),(3726),(3727),(3728),(3729),(3730),(3732),(3734),(3736),(3737),(3741),(3742),(3743),(3744),(3745),(3746),(3747),(3748),(3749),(3750),(3751),(3752),(3753),(3754),(3755),(3756),(3757),(3758),(3759),(3760),(3761),(3762),(3763),(3764),(3765),(3766),(3767),(3768),(3769),(3770),(3771),(3773),(3775),(3777),(3779),(3780),(3781),(3782),(3783),(3784),(3785),(3786),(3787),(3788),(3789),(3790),(3791),(3793),(3794),(3795),(3797),(3799),(3801),(3802),(3803),(3804),(3805),(3806),(3807),(3808),(3809),(3810),(3811),(3812),(3813),(3814),(3815),(3816),(3817),(3818),(3819),(3820),(3821),(3822),(3823),(3824),(3825),(3826),(3827),(3828),(3829),(3830),(3831),(3832),(3833),(3834),(3836),(3837),(3838),(3847),(3848),(3850),(3852),(3853),(3854),(3855),(3856),(3858),(3859),(3860),(3861),(3862),(3863),(3864),(3865),(3866),(3867),(3868),(3869),(3870),(3871),(3872),(3873),(3874),(3875),(3877),(3878),(3879),(3880),(3881),(3882),(3883),(3885),(3887),(3889),(3894),(3895),(3896),(3897),(3898),(3900),(3901),(3902),(3903),(3904),(3905),(3906),(3907),(3910),(3911),(3913),(3915),(3917),(3918),(3920),(3923),(3925),(3926),(3927),(3929),(3930),(3931),(3932),(3934),(3935),(3936),(3937),(3938),(3940),(3941),(3942),(3949),(3950),(3952),(3953),(3954),(3955),(3956),(3957),(3958),(3959),(3960),(3961),(3962),(3963),(3964),(3965),(3966),(3967),(3968),(3969),(3970),(3971),(3977),(3978),(3979),(3980),(3981),(3983),(3984),(3985),(3986),(3987),(3992),(3993),(3994),(3995),(3996),(3997),(3998),(3999),(4000),(4001),(4002),(4003),(4004),(4005),(4006),(4007),(4008),(4009),(4010),(4011),(4012),(4013),(4017),(4019),(4021),(4023),(4025),(4027),(4028),(4029),(4030),(4033),(4034),(4035),(4036),(4037),(4038),(4040),(4041),(4046),(4049),(4050),(4051),(4052),(4058),(4059),(4065),(4067),(4068),(4069),(4070),(4071),(4072),(4073),(4074),(4075),(4077),(4078),(4079),(4080),(4081),(4083),(4087),(4092),(4093),(4094),(4095),(4096),(4097),(4098),(4099),(4100),(4101),(4102),(4103),(4104),(4105),(4106),(4107),(4108),(4109),(4110),(4112),(4116),(4117),(4118),(4119),(4120),(4121),(4122),(4123),(4124),(4127),(4128),(4129),(4130),(4131),(4132),(4133),(4135),(4137),(4140),(4142),(4144),(4146),(4147),(4149),(4152),(4153),(4154),(4155),(4156),(4157),(4158),(4159),(4160),(4161),(4162),(4163),(4164),(4166),(4175),(4177),(4179),(4180),(4181),(4184),(4189),(4190),(4192),(4193),(4194),(4203),(4204),(4205),(4206),(4207),(4208),(4209),(4210),(4211),(4212),(4213),(4217),(4218),(4219),(4220),(4221),(4222),(4223),(4224),(4225),(4226),(4228),(4229),(4230),(4232),(4233),(4234),(4236),(4238),(4240),(4242),(4243),(4244),(4246),(4247),(4248),(4249),(4250),(4251),(4252),(4253),(4254),(4255),(4256),(4257),(4258),(4259),(4260),(4261),(4262),(4263),(4264),(4265),(4266),(4268),(4270),(4271),(4272),(4273),(4274),(4275),(4276),(4277),(4278),(4280),(4282),(4284),(4285),(4286),(4287),(4288),(4289),(4290),(4291),(4292),(4293),(4294),(4296),(4297),(4298),(4299),(4300),(4301),(4302),(4303),(4304),(4305),(4306),(4307),(4308),(4310),(4311),(4313),(4314),(4316),(4317),(4318),(4319),(4320),(4321),(4322),(4323),(4324),(4325),(4326),(4328),(4329),(4330),(4331),(4332),(4333),(4334),(4337),(4338),(4340),(4341),(4342),(4343),(4344),(4346),(4347),(4349),(4350),(4352),(4353),(4355),(4356),(4358),(4359),(4361),(4362),(4364),(4365),(4367),(4368),(4369),(4370),(4371),(4372),(4373),(4374),(4375),(4376),(4377),(4378),(4379),(4380),(4381),(4382),(4383),(4384),(4385),(4387),(4389),(4390),(4391),(4392),(4393),(4394),(4395),(4396),(4397),(4398),(4399),(4400),(4401),(4402),(4403),(4404),(4405),(4406),(4408),(4409),(4411),(4412),(4414),(4415),(4417),(4423),(4426),(4428),(4429),(4431),(4432),(4434),(4435),(4437),(4438),(4440),(4441),(4443),(4444),(4446),(4447),(4449),(4450),(4452),(4453),(4455),(4456),(4457),(4458),(4459),(4460),(4461),(4462),(4463),(4464),(4465),(4467),(4468),(4470),(4471),(4472),(4473),(4474),(4476),(4477),(4479),(4480),(4482),(4483),(4485),(4486),(4487),(4488),(4489),(4490),(4491),(4492),(4493),(4494),(4495),(4496),(4497),(4499),(4500),(4501),(4502),(4506),(4508),(4510),(4512),(4513),(4514),(4516),(4518),(4520),(4522),(4523),(4524),(4525),(4526),(4527),(4530),(4531),(4532),(4534),(4535),(4536),(4537),(4538),(4539),(4540),(4541),(4542),(4544),(4546),(4547),(4548),(4549),(4550),(4551),(4552),(4553),(4554),(4556),(4557),(4558),(4559),(4560),(4561),(4562),(4564),(4566),(4568),(4570),(4572),(4574),(4576),(4577),(4578),(4579),(4580),(4581),(4582),(4583),(4584),(4585),(4586),(4587),(4589),(4590),(4591),(4592),(4593),(4594),(4595),(4596),(4597),(4598),(4600),(4601),(4604),(4607),(4610),(4613),(4616),(4619),(4622),(4625),(4628),(4631),(4632),(4634),(4640),(4643),(4646),(4649),(4652),(4655),(4658),(4661),(4664),(4667),(4669),(4670),(4673),(4676),(4679),(4681),(4682),(4685),(4688),(4690),(4691),(4693),(4694),(4696),(4697),(4698),(4699),(4701),(4702),(4703),(4704),(4705),(4706),(4707),(4708),(4709),(4710),(4711),(4713),(4714),(4715),(4716),(4717),(4718),(4721),(4722),(4724),(4725),(4726),(4727),(4728),(4729),(4730),(4731),(4732),(4733),(4734),(4735),(4736),(4737),(4738),(4739),(4740),(4741),(4742),(4743),(4745),(4746),(4747),(4749),(4750),(4751),(4752),(4753),(4755),(4757),(4758),(4761),(4762),(4765),(4766),(4768),(4769),(4770),(4771),(4772),(4773),(4775),(4776),(4777),(4778),(4779),(4780),(4781),(4782),(4783),(4784),(4786),(4788),(4790),(4792),(4794),(4796),(4798),(4799),(4800),(4802),(4803),(4804),(4806),(4807),(4808),(4809),(4811),(4812),(4813),(4814),(4815),(4816),(4817),(4818),(4819),(4821),(4822),(4824),(4825),(4826),(4827),(4828),(4829),(4830),(4831),(4832),(4833),(4834),(4835),(4836),(4837),(4838),(4839),(4840),(4841),(4842),(4843),(4844),(4845),(4846),(4848),(4849),(4850),(4851),(4852),(4853),(4854),(4857),(4858),(4860),(4861),(4862),(4865),(4866),(4867),(4869),(4870),(4871),(4872),(4875),(4876),(4877),(4878),(4880),(4881),(4882),(4883),(4884),(4885),(4886),(4887),(4888),(4889),(4890),(4891),(4892),(4893),(4895),(4896),(4897),(4898),(4900),(4901),(4902),(4903),(4905),(4906),(4907),(4908),(4910),(4911),(4912),(4913),(4914),(4915),(4916),(4917),(4918),(4919),(4920),(4921),(4922),(4923),(4924),(4925),(4926),(4927),(4928),(4929),(4930),(4931),(4932),(4933),(4934),(4935),(4936),(4937),(4938),(4939),(4940),(4941),(4942),(4943),(4945),(4947),(4948),(4950),(4951),(4952),(4953),(4954),(4955),(4957),(4958),(4960),(4961),(4962),(4963),(4964),(4965),(4966),(4967),(4968),(4970),(4971),(4972),(4973),(4974),(4975),(4976),(4977),(4978),(4979),(4980),(4981),(4982),(4983),(4984),(4985),(4986),(4987),(4988),(4989),(4990),(4991),(4992),(4993),(4994),(4995),(4996),(4997),(4998),(4999),(5000),(5001),(5002),(5003),(5005),(5006),(5007),(5008),(5010),(5011),(5012),(5013),(5014),(5015),(5016),(5017),(5018),(5019),(5020),(5021),(5022),(5023),(5024),(5025),(5026),(5027),(5028),(5029),(5030),(5031),(5032),(5033),(5034),(5035),(5036),(5037),(5038),(5039),(5040),(5041),(5042),(5043),(5044),(5045),(5046),(5047),(5048),(5049),(5050),(5051),(5052),(5053),(5054),(5056),(5057),(5058),(5059),(5062),(5063),(5064),(5066),(5068),(5069),(5070),(5071),(5072),(5074),(5075),(5076),(5077),(5078),(5080),(5081),(5082),(5083),(5086),(5087),(5088),(5089),(5092),(5093),(5094),(5095),(5097),(5098),(5099),(5100),(5103),(5104),(5105),(5106),(5107),(5109),(5110),(5111),(5112),(5113),(5115),(5116),(5117),(5118),(5119),(5120),(5121),(5122),(5123),(5124),(5126),(5127),(5128),(5129),(5130),(5133),(5134),(5135),(5136),(5137),(5138),(5139),(5140),(5141),(5142),(5143),(5145),(5146),(5147),(5148),(5149),(5151),(5152),(5153),(5154),(5155),(5157),(5158),(5159),(5160),(5161),(5164),(5165),(5166),(5167),(5169),(5170),(5171),(5172),(5174),(5175),(5176),(5179),(5180),(5181),(5184),(5185),(5186),(5188),(5189),(5190),(5191),(5195),(5196),(5199),(5200),(5201),(5202),(5204),(5205),(5206),(5209),(5211),(5214),(5215),(5216),(5219),(5220),(5221),(5222),(5224),(5225),(5226),(5227),(5229),(5230),(5231),(5232),(5234),(5235),(5236),(5239),(5240),(5241),(5242),(5243),(5244),(5245),(5246),(5247),(5248),(5249),(5250),(5251),(5252),(5253),(5254),(5255),(5258),(5259),(5260),(5261),(5262),(5263),(5264),(5265),(5266),(5267),(5268),(5269),(5270),(5271),(5273),(5274),(5275),(5276),(5277),(5280),(5281),(5282),(5283),(5284),(5285),(5286),(5287),(5288),(5289),(5290),(5291),(5293),(5294),(5295),(5296),(5298),(5299),(5300),(5301),(5303),(5304),(5306),(5307),(5308),(5309),(5310),(5311),(5312),(5313),(5314),(5315),(5316),(5317),(5318),(5319),(5320),(5321),(5322),(5323),(5324),(5325),(5326),(5328),(5329),(5330),(5331),(5332),(5333),(5334),(5335),(5336),(5337),(5338),(5339),(5340),(5342),(5343),(5344),(5345),(5346),(5347),(5348),(5349),(5350),(5351),(5352),(5353),(5354),(5355),(5356),(5357),(5358),(5359),(5360),(5361),(5362),(5363),(5364),(5365),(5366),(5367),(5368),(5369),(5370),(5371),(5372),(5373),(5374),(5375),(5376),(5377),(5378),(5379),(5380),(5381),(5382),(5383),(5384),(5385),(5386),(5387),(5388),(5389),(5390),(5391),(5392),(5393),(5394),(5395),(5396),(5397),(5398),(5399),(5400),(5401),(5402),(5403),(5405),(5406),(5407),(5408),(5410),(5411),(5412),(5413),(5415),(5416),(5417),(5418),(5419),(5420),(5422),(5423),(5424),(5425),(5427),(5428),(5429),(5430),(5432),(5433),(5434),(5435),(5437),(5438),(5440),(5441),(5442),(5443),(5444),(5445),(5446),(5447),(5448),(5449),(5450),(5452),(5453),(5454),(5455),(5456),(5457),(5458),(5459),(5460),(5461),(5462),(5463),(5464),(5465),(5467),(5468),(5469),(5471),(5472),(5475),(5476),(5477),(5478),(5481),(5482),(5483),(5484),(5487),(5488),(5489),(5491),(5493),(5494),(5495),(5496),(5497),(5499),(5501),(5503),(5505),(5507),(5509),(5510),(5512),(5513),(5514),(5515),(5517),(5518),(5519),(5522),(5524),(5525),(5527),(5528),(5529),(5530),(5531),(5532),(5533),(5534),(5535),(5536),(5538),(5539),(5540),(5541),(5542),(5543),(5544),(5545),(5547),(5548),(5550),(5551),(5553),(5554),(5556),(5557),(5558),(5559),(5560),(5562),(5563),(5565),(5566),(5568),(5569),(5570),(5571),(5572),(5574),(5575),(5577),(5578),(5581),(5583),(5586),(5587),(5588),(5589),(5590),(5592),(5593),(5594),(5595),(5596),(5597),(5598),(5599),(5600),(5601),(5602),(5603),(5604),(5605),(5606),(5607),(5609),(5610),(5612),(5613),(5614),(5615),(5616),(5618),(5619),(5622),(5624),(5625),(5627),(5628),(5632),(5634),(5636),(5638),(5640),(5642),(5643),(5644),(5646),(5647),(5648),(5650),(5651),(5652),(5653),(5654),(5655),(5656),(5657),(5658),(5659),(5660),(5661),(5662),(5663),(5664),(5666),(5667),(5668),(5669),(5670),(5672),(5673),(5674),(5675),(5676),(5677),(5678),(5679),(5680),(5681),(5682),(5683),(5684),(5685),(5686),(5687),(5688),(5689),(5690),(5691),(5692),(5693),(5695),(5696),(5698),(5699),(5701),(5702),(5704),(5705),(5707),(5708),(5710),(5711),(5713),(5714),(5716),(5717),(5719),(5720),(5721),(5722),(5723),(5724),(5725),(5726),(5727),(5728),(5729),(5731),(5732),(5733),(5734),(5735),(5736),(5737),(5738),(5739),(5740),(5742),(5743),(5744),(5745),(5746),(5747),(5748),(5749),(5750),(5751),(5752),(5753),(5755),(5756),(5758),(5759),(5760),(5761),(5762),(5764),(5765),(5766),(5767),(5768),(5769),(5770),(5771),(5772),(5773),(5774),(5775),(5776),(5777),(5778),(5779),(5780),(5781),(5782),(5784),(5785),(5786),(5787),(5788),(5789),(5790),(5791),(5792),(5793),(5794),(5795),(5796),(5797),(5798),(5799),(5800),(5801),(5802),(5803),(5804),(5805),(5806),(5807),(5808),(5809),(5810),(5811),(5812),(5813),(5815),(5816),(5817),(5819),(5820),(5823),(5824),(5827),(5828),(5829),(5831),(5832),(5833),(5835),(5836),(5837),(5838),(5839),(5840),(5841),(5843),(5844),(5845),(5847),(5848),(5849),(5850),(5851),(5852),(5853),(5855),(5856),(5857),(5858),(5859),(5860),(5861),(5862),(5863),(5864),(5865),(5866),(5867),(5868),(5869),(5871),(5872),(5873),(5874),(5875),(5877),(5879),(5883),(5884),(5887),(5888),(5890),(5891),(5893),(5894),(5895),(5896),(5897),(5898),(5899),(5900),(5901),(5902),(5905),(5907),(5908),(5909),(5910),(5912),(5913),(5914),(5915),(5916),(5917),(5918),(5919),(5920),(5922),(5923),(5925),(5927),(5929),(5930),(5931),(5932),(5933),(5934),(5935),(5936),(5937),(5938),(5940),(5941),(5942),(5943),(5945),(5947),(5948),(5950),(5953),(5954),(5956),(5957),(5959),(5960),(5961),(5962),(5963),(5965),(5966),(5968),(5970),(5971),(5972),(5974),(5976),(5977),(5980),(5983),(5984),(5985),(5986),(5988),(5990),(5991),(5992),(5993),(5994),(5995),(5996),(5998),(5999),(6000),(6001),(6004),(6005),(6007),(6008),(6010),(6012),(6013),(6016),(6019),(6020),(6022),(6025),(6026),(6028),(6031),(6034),(6036),(6037),(6039),(6040),(6042),(6045),(6047),(6049),(6050),(6051),(6053),(6055),(6057),(6058),(6059),(6061),(6062),(6063),(6064),(6065),(6066),(6067),(6068),(6069),(6070),(6071),(6072),(6073),(6076),(6077),(6079),(6080),(6081),(6083),(6084),(6085),(6087),(6088),(6089),(6091),(6092),(6093),(6095),(6097),(6099),(6100),(6101),(6103),(6104),(6105),(6106),(6107),(6108),(6109),(6111),(6112),(6113),(6115),(6116),(6117),(6119),(6120),(6121),(6123),(6125),(6127),(6129),(6131),(6132),(6133),(6137),(6139),(6140),(6141),(6143),(6144),(6146),(6147),(6148),(6151),(6153),(6155),(6157),(6158),(6159),(6163),(6164),(6167),(6168),(6169),(6170),(6171),(6172),(6173),(6174),(6175),(6176),(6178),(6179),(6180),(6182),(6183),(6184),(6186),(6187),(6188),(6190),(6191),(6192),(6194),(6195),(6196),(6197),(6198),(6199),(6200),(6201),(6202),(6203),(6204),(6205),(6206),(6207),(6208),(6211),(6215),(6216),(6217),(6218),(6219),(6220),(6221),(6222),(6223),(6224),(6225),(6227),(6228),(6229),(6230),(6232),(6233),(6234),(6236),(6237),(6238),(6239),(6240),(6241),(6242),(6244),(6245),(6246),(6247),(6249),(6250),(6251),(6252),(6253),(6257),(6258),(6260),(6261),(6262),(6265),(6266),(6267),(6268),(6269),(6270),(6271),(6272),(6273),(6275),(6276),(6277),(6278),(6279),(6281),(6282),(6284),(6285),(6286),(6287),(6289),(6290),(6291),(6292),(6294),(6295),(6296),(6297),(6299),(6300),(6302),(6305),(6312),(6314),(6315),(6317),(6319),(6320),(6322),(6324),(6325),(6326),(6327),(6329),(6330),(6331),(6332),(6333),(6334),(6335),(6336),(6337),(6338),(6339),(6340),(6341),(6342),(6343),(6344),(6345),(6346),(6347),(6348),(6350),(6351),(6352),(6353),(6354),(6355),(6357),(6358),(6359),(6360),(6361),(6362),(6364),(6365),(6366),(6367),(6369),(6370),(6371),(6372),(6373),(6374),(6375),(6376),(6377),(6378),(6379),(6381),(6382),(6383),(6384),(6385),(6386),(6387),(6388),(6389),(6390),(6391),(6393),(6395),(6396),(6397),(6400),(6401),(6402),(6404),(6405),(6409),(6410),(6411),(6412),(6414),(6416),(6421),(6427),(6429),(6430),(6433),(6435),(6436),(6439),(6442),(6445),(6447),(6448),(6449),(6451),(6453),(6454),(6455),(6457),(6460),(6461),(6463),(6466),(6467),(6469),(6470),(6472),(6473),(6479),(6481),(6482),(6483),(6484),(6487),(6488),(6489),(6490),(6491),(6493),(6494),(6495),(6497),(6499),(6500),(6502),(6505),(6506),(6507),(6508),(6509),(6512),(6513),(6514),(6515),(6517),(6518),(6520),(6521),(6524),(6526),(6528),(6529),(6530),(6531),(6532),(6534),(6535),(6536),(6537),(6538),(6540),(6541),(6542),(6543),(6544),(6545),(6546),(6547),(6548),(6549),(6550),(6551),(6553),(6554),(6555),(6556),(6557),(6559),(6560),(6561),(6562),(6563),(6565),(6566),(6567),(6568),(6569),(6572),(6573),(6574),(6575),(6577),(6578),(6579),(6580),(6583),(6584),(6585),(6589),(6590),(6591),(6593),(6595),(6596),(6597),(6598),(6599),(6600),(6601),(6602),(6603),(6604),(6606),(6608),(6609),(6611),(6613),(6614),(6615),(6616),(6617),(6619),(6620),(6622),(6624),(6625),(6626),(6627),(6628),(6629),(6630),(6631),(6632),(6634),(6635),(6636),(6638),(6639),(6640),(6641),(6642),(6644),(6645),(6646),(6649),(6650),(6651),(6653),(6654),(6655),(6656),(6657),(6658),(6660),(6661),(6662),(6663),(6667),(6668),(6669),(6672),(6673),(6674),(6675),(6678),(6679),(6680),(6681),(6683),(6684),(6685),(6686),(6690),(6691),(6692),(6693),(6696),(6697),(6699),(6701),(6704),(6705),(6707),(6709),(6710),(6711),(6713),(6715),(6717),(6719),(6721),(6722),(6723),(6724),(6725),(6727),(6728),(6729),(6730),(6731),(6732),(6733),(6734),(6737),(6739),(6741),(6743),(6745),(6747),(6750),(6751),(6752),(6753),(6757),(6758),(6762),(6763),(6764),(6765),(6768),(6769),(6771),(6773),(6774),(6775),(6777),(6780),(6781),(6782),(6787),(6789),(6791),(6793),(6794),(6795),(6799),(6800),(6803),(6804),(6805),(6806),(6808),(6809),(6810),(6811),(6812),(6814),(6817),(6818),(6820),(6821),(6823),(6824),(6826),(6828),(6829),(6830),(6832),(6834),(6836),(6840),(6841),(6842),(6843),(6844),(6845),(6846),(6847),(6848),(6849),(6852),(6853),(6854),(6857),(6858),(6859),(6860),(6862),(6864),(6866),(6868),(6871),(6872),(6874),(6877),(6878),(6879),(6882),(6883),(6885),(6886),(6889),(6890),(6891),(6894),(6895),(6896),(6898),(6901),(6902),(6903),(6905),(6908),(6909),(6911),(6914),(6918),(6919),(6920),(6921),(6923),(6925),(6926),(6927),(6928),(6929),(6932),(6933),(6935),(6938),(6939),(6943),(6944),(6946),(6948),(6951),(6952),(6953),(6956),(6957),(6958),(6959),(6961),(6963),(6964),(6965),(6966),(6967),(6968),(6969),(6971),(6973),(6974),(6977),(6978),(6979),(6981),(6983),(6984),(6987),(6988),(6989),(6991),(6992),(6993),(6994),(6996),(6997),(6998),(6999),(7001),(7002),(7003),(7004),(7006),(7008),(7009),(7011),(7012),(7013),(7014),(7016),(7018),(7019),(7020),(7023),(7024),(7026),(7028),(7029),(7030),(7031),(7033),(7034),(7036),(7040),(7041),(7042),(7043),(7046),(7051),(7055),(7057),(7058),(7060),(7063),(7064),(7065),(7066),(7067),(7068),(7071),(7073),(7076),(7078),(7079),(7080),(7081),(7082),(7083),(7084),(7086),(7087),(7088),(7091),(7092),(7096),(7099),(7100),(7101),(7102),(7103),(7105),(7106),(7107),(7108),(7112),(7113),(7114),(7115),(7116),(7117),(7119),(7120),(7121),(7124),(7125),(7126),(7127),(7128),(7129),(7131),(7132),(7133),(7134),(7137),(7138),(7142),(7143),(7144),(7149),(7150),(7151),(7154),(7155),(7157),(7158),(7159),(7160),(7163),(7165),(7166),(7169),(7170),(7173),(7174),(7175),(7176),(7178),(7179),(7181),(7184),(7185),(7186),(7189),(7190),(7191),(7193),(7194),(7196),(7198),(7199),(7200),(7202),(7203),(7204),(7205),(7208),(7211),(7212),(7214),(7215),(7220),(7222),(7223),(7224),(7226),(7229),(7230),(7231),(7232),(7233),(7234),(7239),(7240),(7242),(7243),(7244),(7245),(7246),(7248),(7249),(7251),(7252),(7253),(7255),(7258),(7260),(7261),(7263),(7264),(7266),(7269),(7271),(7273),(7276),(7277),(7279),(7280),(7281),(7282),(7283),(7284),(7285),(7286),(7288),(7289),(7291),(7293),(7294),(7298),(7299),(7303),(7307),(7310),(7311),(7313),(7314),(7316),(7317),(7318),(7319),(7322),(7324),(7327),(7329),(7333),(7336),(7338),(7343),(7344),(7346),(7350),(7360),(7362),(7365),(7367),(7370),(7373),(7376),(7378),(7379),(7380),(7383),(7384),(7385),(7386),(7387),(7389),(7391),(7393),(7394),(7399),(7402),(7403),(7405),(7407),(7409),(7413),(7416),(7420),(7421),(7423),(7424),(7426),(7433),(7434),(7438),(7442),(7448),(7449),(7450),(7451),(7453),(7454),(7455),(7458),(7460),(7461),(7462),(7463),(7464),(7467),(7471),(7472),(7473),(7476),(7477),(7479),(7482),(7487),(7488),(7489),(7492),(7493),(7494),(7496),(7497),(7498),(7499),(7503),(7504),(7506),(7507),(7508),(7509),(7510),(7513),(7514),(7515),(7516),(7517),(7519),(7520),(7521),(7524),(7526),(7530),(7532),(7535),(7536),(7538),(7541),(7544),(7545),(7547),(7549),(7550),(7553),(7554),(7555),(7557),(7558),(7559),(7560),(7562),(7563),(7565),(7566),(7568),(7569),(7570),(7572),(7573),(7575),(7576),(7578),(7582),(7584),(7594),(7597),(7600),(7609),(7614),(7615),(7617),(7618),(7621),(7622),(7624),(7625),(7627),(7628),(7631),(7632),(7638),(7639),(7640),(7641),(7644),(7647),(7648),(7651),(7652),(7653),(7654),(7655),(7656),(7660),(7661),(7664),(7665),(7669),(7671),(7672),(7674),(7676),(7678),(7680),(7685),(7686),(7688),(7689),(7691),(7692),(7693),(7697),(7700),(7702),(7704),(7705),(7706),(7708),(7709),(7714),(7716),(7717),(7719),(7724),(7725),(7726),(7727),(7729),(7730),(7731),(7735),(7738),(7741),(7744),(7745),(7746),(7748),(7749),(7751),(7752),(7754),(7757),(7763),(7764),(7766),(7767),(7769),(7772),(7774),(7775),(7778),(7782),(7783),(7784),(7786),(7788),(7790),(7792),(7794),(7795),(7796),(7798),(7799),(7800),(7804),(7808),(7810),(7814),(7817),(7818),(7822),(7825),(7828),(7832),(7835),(7837),(7838),(7840),(7841),(7844),(7846),(7847),(7849),(7851),(7853),(7855),(7856),(7857),(7859),(7865),(7867),(7869),(7871),(7873),(7875),(7877),(7879),(7881),(7882),(7883),(7884),(7885),(7886),(7889),(7890),(7891),(7892),(7893),(7897),(7898),(7899),(7901),(7907),(7910),(7911),(7916),(7919),(7922),(7925),(7927),(7929),(7931),(7933),(7935),(7937),(7941),(7945),(7950),(7951),(7953),(7954),(7959),(7978),(7979),(7981),(7984),(7986),(7988),(7990),(7994),(7998),(8000),(8002),(8004),(8005),(8006),(8008),(8009),(8010),(8012),(8020),(8023),(8026),(8027),(8029),(8030),(8031),(8032),(8034),(8036),(8039),(8041),(8042),(8049),(8052),(8053),(8054),(8056),(8059),(8062),(8064),(8070),(8072),(8073),(8074),(8076),(8079),(8080),(8081),(8082),(8083),(8084),(8085),(8086),(8087),(8089),(8091),(8093),(8095),(8097),(8099),(8101),(8105),(8109),(8113),(8117),(8119),(8121),(8122),(8123),(8124),(8125),(8127),(8129),(8131),(8132),(8133),(8135),(8136),(8137),(8143),(8146),(8149),(8155),(8156),(8157),(8162),(8164),(8168),(8189),(8191),(8198),(8200),(8201),(8203),(8204),(8208),(8209),(8212),(8213),(8217),(8219),(8233),(8234),(8241),(8242),(8243),(8244),(8246),(8247),(8248),(8250),(8251),(8252),(8256),(8257),(8258),(8260),(8262),(8264),(8266),(8268),(8270),(8272),(8274),(8276),(8278),(8280),(8284),(8288),(8290),(8292),(8294),(8296),(8298),(8300),(8302),(8308),(8312),(8314),(8316),(8324),(8326),(8328),(8332),(8334),(8336),(8338),(8341),(8344),(8347),(8351),(8353),(8356),(8357),(8359),(8362),(8363),(8365),(8374),(8375),(8380),(8386),(8395),(8396),(8401),(8407),(8408),(8411),(8414),(8416),(8419),(8420),(8422),(8423),(8425),(8429),(8431),(8432),(8434),(8435),(8437),(8438),(8440),(8441),(8443),(8450),(8452),(8453),(8456),(8464),(8467),(8475),(8482),(8486),(8490),(8491),(8492),(8496),(8499),(8500),(8503),(8506),(8510),(8511),(8514),(8518),(8520),(8522),(8526),(8528),(8534),(8536),(8538),(8539),(8542),(8543),(8546),(8547),(8548),(8550),(8552),(8554),(8555),(8556),(8558),(8560),(8563),(8566),(8570),(8577),(8593),(8595),(8598),(8599),(8602),(8612),(8613),(8616),(8617),(8624),(8625),(8635),(8637),(8643),(8647),(8651),(8659),(8679),(8683),(8684),(8688),(8689),(8691),(8693),(8695),(8696),(8699),(8700),(8703),(8704),(8707),(8708),(8709),(8712),(8715),(8717),(8719),(8720),(8724),(8727),(8728),(8735),(8736),(8740),(8743),(8744),(8752),(8755),(8756),(8760),(8763),(8764),(8768),(8773),(8783),(8793),(8797),(8798),(8803),(8808),(8809),(8814),(8817),(8820),(8823),(8824),(8825),(8828),(8832),(8833),(8837),(8838),(8839),(8842),(8843),(8845),(8848),(8849),(8853),(8854),(8855),(8858),(8859),(8860),(8863),(8868),(8869),(8878),(8882),(8883),(8884),(8885),(8887),(8888),(8889),(8892),(8897),(8900),(8902),(8904),(8907),(8908),(8922),(8924),(8928),(8932),(8933),(8934),(8939),(8940),(8943),(8944),(8948),(8949),(8953),(8955),(8960),(8962),(8963),(8965),(8969),(8971),(8974),(8975),(8976),(8981),(8982),(8983),(8985),(8986),(8988),(8991),(8992),(8993),(8994),(9004),(9006),(9010),(9011),(9012),(9015),(9016),(9018),(9022),(9023),(9024),(9029),(9030),(9031),(9033),(9034),(9035),(9036),(9037),(9039),(9040),(9041),(9043),(9045),(9047),(9048),(9049),(9051),(9052),(9057),(9058),(9063),(9064),(9066),(9067),(9069),(9071),(9072),(9073),(9077),(9078),(9079),(9083),(9084),(9088),(9089),(9090),(9091),(9093),(9095),(9096),(9097),(9099),(9101),(9102),(9103),(9105),(9107),(9108),(9113),(9114),(9115),(9117),(9119),(9120),(9121),(9123),(9125),(9126),(9129),(9131),(9132),(9133),(9135),(9136),(9137),(9139),(9141),(9143),(9144),(9147),(9149),(9150),(9155),(9156),(9161),(9163),(9165),(9167),(9168),(9169),(9173),(9174),(9175),(9179),(9181),(9183),(9184),(9185),(9186),(9187),(9189),(9190),(9191),(9192),(9193),(9195),(9198),(9201),(9202),(9203),(9204),(9208),(9210),(9211),(9213),(9215),(9218),(9219),(9222),(9224),(9226),(9229),(9230),(9231),(9232),(9234),(9236),(9237),(9238),(9239),(9243),(9245),(9246),(9248),(9250),(9251),(9252),(9253),(9255),(9257),(9259),(9265),(9266),(9267),(9268),(9269),(9271),(9273),(9275),(9276),(9278),(9280),(9281),(9283),(9285),(9288),(9294),(9295),(9297),(9299),(9300),(9301),(9303),(9306),(9308),(9310),(9311),(9313),(9315),(9318),(9320),(9322),(9323),(9326),(9327),(9329),(9331),(9334),(9336),(9338),(9341),(9342),(9343),(9344),(9346),(9347),(9348),(9353),(9358),(9359),(9361),(9363),(9365),(9368),(9369),(9370),(9373),(9375),(9378),(9380),(9381),(9383),(9385),(9388),(9390),(9391),(9393),(9395),(9397),(9398),(9400),(9403),(9405),(9407),(9408),(9410),(9411),(9413),(9415),(9416),(9418),(9420),(9421),(9423),(9424),(9426),(9428),(9429),(9431),(9432),(9434),(9437),(9440),(9441),(9443),(9444),(9445),(9448),(9450),(9453),(9456),(9460),(9462),(9465),(9467),(9468),(9473),(9477),(9479),(9480),(9481),(9483),(9485),(9489),(9491),(9495),(9497),(9499),(9500),(9505),(9506),(9507),(9509),(9514),(9515),(9516),(9518),(9520),(9524),(9525),(9526),(9527),(9528),(9533),(9534),(9538),(9540),(9543),(9546),(9553),(9560),(9566),(9570),(9575),(9576),(9577),(9578),(9579),(9582),(9583),(9584),(9588),(9589),(9592),(9594),(9596),(9597),(9599),(9600),(9603),(9604),(9606),(9608),(9609),(9612),(9613),(9614),(9615),(9618),(9621),(9624),(9627),(9630),(9632),(9633),(9634),(9636),(9642),(9645),(9646),(9648),(9649),(9650),(9651),(9653),(9654),(9656),(9657),(9662),(9663),(9664),(9665),(9666),(9669),(9671),(9672),(9673),(9674),(9677),(9678),(9680),(9681),(9683),(9684),(9688),(9689),(9691),(9692),(9694),(9696),(9697),(9698),(9705),(9709),(9712),(9713),(9716),(9717),(9720),(9722),(9724),(9726),(9727),(9728),(9729),(9730),(9731),(9732),(9733),(9734),(9737),(9738),(9739),(9741),(9745),(9746),(9748),(9749),(9751),(9752),(9753),(9755),(9758),(9759),(9760),(9765),(9769),(9771),(9773),(9774),(9778),(9779),(9780),(9785),(9787),(9790),(9793),(9794),(9797),(9799),(9801),(9803),(9804),(9808),(9811),(9813),(9815),(9816),(9817),(9818),(9820),(9821),(9822),(9824),(9827),(9829),(9831),(9832),(9834),(9835),(9836),(9841),(9842),(9843),(9845),(9846),(9848),(9849),(9850),(9855),(9856),(9857),(9858),(9859),(9861),(9862),(9863),(9864),(9865),(9866),(9867),(9868),(9870),(9871),(9872),(9873),(9875),(9876),(9877),(9879),(9880),(9884),(9886),(9887),(9892),(9893),(9894),(9895),(9900),(9901),(9902),(9906),(9907),(9908),(9909),(9913),(9914),(9915),(9920),(9921),(9922),(9923),(9924),(9926),(9927),(9929),(9931),(9932),(9933),(9934),(9935),(9939),(9941),(9942),(9947),(9948),(9949),(9950),(9951),(9955),(9957),(9958),(9960),(9961),(9963),(9965),(9966),(9967),(9968),(9973),(9974),(9975),(9977),(9979),(9981),(9985),(9986),(9987),(9989),(9990),(9992),(9993),(9995),(9997),(10001),(10003),(10009),(10010),(10011),(10012),(10013),(10015),(10017),(10018),(10019),(10021),(10023),(10024),(10026),(10027),(10029),(10032),(10034),(10037),(10039),(10042),(10047),(10051),(10053),(10056),(10057),(10061),(10064),(10066),(10067),(10069),(10070),(10071),(10072),(10074),(10075),(10076),(10077),(10078),(10079),(10081),(10083),(10085),(10086),(10087),(10088),(10089),(10090),(10091),(10096),(10097),(10098),(10101),(10102),(10103),(10107),(10108),(10109),(10110),(10111),(10114),(10115),(10118),(10119),(10120),(10121),(10123),(10126),(10127),(10129),(10130),(10132),(10133),(10134),(10135),(10139),(10141),(10142),(10146),(10151),(10152),(10153),(10155),(10163),(10168),(10169),(10171),(10174),(10175),(10176),(10179),(10180),(10184),(10186),(10188),(10190),(10195),(10197),(10202),(10204),(10206),(10210),(10211),(10214),(10219),(10224),(10225),(10226),(10227),(10229),(10235),(10237),(10238),(10242),(10245),(10250),(10258),(10264),(10269),(10271),(10272),(10276),(10280),(10282),(10288),(10296),(10303),(10304),(10319),(10320),(10328),(10334),(10335),(10336),(10339),(10342),(10343),(10347),(10350),(10351),(10368),(10381),(10383),(10384),(10397),(10403),(10404),(10408),(10412),(10424),(10427),(10434),(10439),(10445),(10446),(10450),(10453),(10460),(10467),(10468),(10469),(10480),(10486),(10492),(10497),(10498),(10506),(10524),(10525),(10527),(10529),(10531),(10534),(10535),(10537),(10543),(10546),(10548),(10549),(10554),(10561),(10563),(10565),(10566),(10567),(10568),(10573),(10577),(10582),(10584),(10587),(10588),(10589),(10592),(10594),(10596),(10598),(10600),(10603),(10607),(10609),(10611),(10617),(10623),(10631),(10635),(10637),(10641),(10643),(10644),(10646),(10655),(10656),(10658),(10668),(10670),(10671),(10673),(10679),(10685),(10695),(10697),(10701),(10703),(10709),(10716),(10727),(10728),(10733),(10734),(10737),(10739),(10745),(10749),(10751),(10753),(10755),(10757),(10761),(10763),(10764),(10767),(10775),(10781),(10790),(10792),(10793),(10798),(10799),(10804),(10805),(10806),(10808),(10811),(10813),(10817),(10820),(10823),(10827),(10828),(10833),(10834),(10835),(10839),(10841),(10846),(10852),(10855),(10859),(10861),(10862),(10873),(10874),(10876),(10877),(10878),(10881),(10882),(10883),(10884),(10887),(10889),(10890),(10894),(10895),(10896),(10897),(10902),(10904),(10905),(10906),(10907),(10909),(10911),(10912),(10913),(10918),(10925),(10929),(10932),(10933),(10945),(10946),(10949),(10952),(10953),(10954),(10958),(10959),(10965),(10971),(10972),(10978),(10988),(10990),(10993),(10994),(10995),(10996),(10997),(11001),(11007),(11014),(11020),(11025),(11026),(11030),(11038),(11042),(11044),(11045),(11048),(11049),(11050),(11054),(11056),(11057),(11060),(11062),(11069),(11076),(11081),(11083),(11086),(11088),(11090),(11093),(11100),(11101),(11102),(11103),(11107),(11111),(11114),(11117),(11125),(11131),(11138),(11139),(11144),(11146),(11151),(11157),(11159),(11160),(11181),(11188),(11191),(11195),(11196),(11198),(11203),(11208),(11216),(11217),(11222),(11223),(11230),(11237),(11238),(11242),(11251),(11263),(11265),(11271),(11272),(11274),(11279),(11286),(11293),(11305),(11307),(11310),(11312),(11313),(11315),(11316),(11317),(11319),(11320),(11321),(11334),(11335),(11340),(11343),(11347),(11348),(11351),(11361),(11368),(11374),(11375),(11388),(11396),(11403),(11417),(11424),(11428),(11429),(11435),(11436),(11438),(11440),(11443),(11445),(11447),(11455),(11459),(11468),(11480),(11482),(11487),(11508),(11510),(11522),(11529),(11531),(11536),(11543),(11545),(11546),(11547),(11550),(11558),(11559),(11560),(11566),(11567),(11571),(11572),(11581),(11593),(11600),(11601),(11604),(11606),(11607),(11609),(11614),(11615),(11618),(11621),(11624),(11630),(11631),(11632),(11637),(11639),(11641),(11646),(11647),(11655),(11661),(11664),(11666),(11668),(11675),(11682),(11689),(11698),(11704),(11708),(11713),(11715),(11722),(11724),(11736),(11738),(11743),(11750),(11757),(11766),(11768),(11775),(11776),(11783),(11788),(11796),(11809),(11810),(11820),(11824),(11836),(11848),(11851),(11854),(11858),(11860),(11861),(11874),(11879),(11881),(11883),(11885),(11890),(11894),(11899),(11912),(11914),(11918),(11919),(11928),(11940),(11950),(11959),(11967),(11975),(11981),(11984),(11985),(11990),(11991),(11998),(12000),(12007),(12009),(12020),(12022),(12044),(12046),(12051),(12052),(12055),(12060),(12065),(12076),(12084),(12088),(12092),(12093),(12103),(12104),(12108),(12120),(12124),(12126),(12128),(12136),(12144),(12156),(12169),(12172),(12173),(12174),(12190),(12191),(12197),(12223),(12238),(12239),(12241),(12242),(12247),(12249),(12250),(12251),(12254),(12256),(12259),(12265),(12266),(12268),(12273),(12278),(12284),(12289),(12314),(12318),(12319),(12322),(12328),(12340),(12353),(12358),(12383),(12386),(12389),(12392),(12394),(12395),(12404),(12409),(12412),(12416),(12418),(12435),(12438),(12445),(12448),(12455),(12463),(12464),(12466),(12472),(12479),(12481),(12489),(12498),(12499),(12508),(12516),(12517),(12520),(12543),(12547),(12559),(12561),(12562),(12593),(12600),(12606),(12610),(12616),(12620),(12637),(12647),(12660),(12682),(12707),(12716),(12725),(12733),(12734),(12741),(12755),(12760),(12771),(12775),(12791),(12799),(12823),(12824),(12831),(12834),(12840),(12842),(12844),(12847),(12850),(12858),(12863),(12866),(12870),(12874),(12878),(12890),(12894),(12902),(12906),(12910),(12911),(12913),(12914),(12916),(12924),(12928),(12930),(12934),(12939),(12942),(12947),(12958),(12975),(12981),(12983),(12984),(12991),(13006),(13037),(13045),(13072),(13078),(13079),(13083),(13085),(13091),(13097),(13108),(13125),(13130),(13134),(13135),(13144),(13169),(13170),(13172),(13174),(13189),(13191),(13192),(13208),(13215),(13224),(13226),(13241),(13242),(13249),(13254),(13258),(13266),(13285),(13291),(13293),(13301),(13323),(13354),(13370),(13374),(13378),(13379),(13390),(13394),(13399),(13409),(13411),(13413),(13452),(13466),(13468),(13478),(13480),(13482),(13484),(13486),(13490),(13494),(13505),(13511),(13524),(13529),(13533),(13537),(13538),(13539),(13544),(13545),(13547),(13548),(13570),(13572),(13583),(13584),(13596),(13600),(13634),(13656),(13662),(13673),(13690),(13700),(13701),(13703),(13717),(13720),(13721),(13722),(19011),(19012),(19013),(19059),(23939);
/*!40000 ALTER TABLE `production_team_members` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-02 22:37:52
