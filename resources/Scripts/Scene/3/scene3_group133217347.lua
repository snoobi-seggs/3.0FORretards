local L0_1, L1_1, L2_1, L3_1, L4_1, L5_1, L6_1, L7_1
L0_1 = {}
L0_1.group_id = 133217347
L1_1 = {}
monsters = L1_1
L1_1 = {}
npcs = L1_1
L1_1 = {}
gadgets = L1_1
L1_1 = {}
regions = L1_1
L1_1 = {}
triggers = L1_1
L1_1 = {}
variables = L1_1
L1_1 = {}
L2_1 = {}
L3_1 = {}
L3_1.config_id = 347001
L3_1.monster_id = 20011101
L4_1 = {}
L4_1.x = -5104.991
L4_1.y = 198.136
L4_1.z = -4457.762
L3_1.pos = L4_1
L4_1 = {}
L4_1.x = 0.0
L4_1.y = 119.491
L4_1.z = 0.0
L3_1.rot = L4_1
L3_1.level = 32
L3_1.drop_tag = "\229\164\167\229\143\178\232\142\177\229\167\134"
L3_1.area_id = 14
L4_1 = {}
L4_1.config_id = 347002
L4_1.monster_id = 20011101
L5_1 = {}
L5_1.x = -5095.632
L5_1.y = 200.0
L5_1.z = -4464.327
L4_1.pos = L5_1
L5_1 = {}
L5_1.x = 0.0
L5_1.y = 274.181
L5_1.z = 0.0
L4_1.rot = L5_1
L4_1.level = 32
L4_1.drop_tag = "\229\164\167\229\143\178\232\142\177\229\167\134"
L4_1.area_id = 14
L5_1 = {}
L5_1.config_id = 347003
L5_1.monster_id = 20011101
L6_1 = {}
L6_1.x = -5104.259
L6_1.y = 197.391
L6_1.z = -4470.164
L5_1.pos = L6_1
L6_1 = {}
L6_1.x = 0.0
L6_1.y = 0.0
L6_1.z = 0.0
L5_1.rot = L6_1
L5_1.level = 32
L5_1.drop_tag = "\229\164\167\229\143\178\232\142\177\229\167\134"
L5_1.area_id = 14
L6_1 = {}
L6_1.config_id = 347005
L6_1.monster_id = 20010901
L7_1 = {}
L7_1.x = -5101.71
L7_1.y = 198.494
L7_1.z = -4463.77
L6_1.pos = L7_1
L7_1 = {}
L7_1.x = 0.0
L7_1.y = 0.0
L7_1.z = 0.0
L6_1.rot = L7_1
L6_1.level = 30
L6_1.drop_tag = "\229\164\167\229\143\178\232\142\177\229\167\134"
L6_1.area_id = 14
L2_1[1] = L3_1
L2_1[2] = L4_1
L2_1[3] = L5_1
L2_1[4] = L6_1
L1_1.monsters = L2_1
L2_1 = {}
L3_1 = {}
L3_1.config_id = 347004
L4_1 = RegionShape
L4_1 = L4_1.SPHERE
L3_1.shape = L4_1
L3_1.radius = 15
L4_1 = {}
L4_1.x = -5100.353
L4_1.y = 198.908
L4_1.z = -4464.061
L3_1.pos = L4_1
L3_1.area_id = 14
L2_1[1] = L3_1
L1_1.regions = L2_1
L2_1 = {}
L3_1 = {}
L3_1.config_id = 1347004
L3_1.name = "ENTER_REGION_347004"
L4_1 = EventType
L4_1 = L4_1.EVENT_ENTER_REGION
L3_1.event = L4_1
L3_1.source = ""
L3_1.condition = "condition_EVENT_ENTER_REGION_347004"
L3_1.action = "action_EVENT_ENTER_REGION_347004"
L2_1[1] = L3_1
L1_1.triggers = L2_1
garbages = L1_1
L1_1 = {}
L1_1.suite = 1
L1_1.end_suite = 0
L1_1.rand_suite = false
init_config = L1_1
L1_1 = {}
L2_1 = {}
L3_1 = {}
L2_1.monsters = L3_1
L3_1 = {}
L2_1.gadgets = L3_1
L3_1 = {}
L2_1.regions = L3_1
L3_1 = {}
L2_1.triggers = L3_1
L2_1.rand_weight = 100
L3_1 = {}
L4_1 = {}
L3_1.monsters = L4_1
L4_1 = {}
L3_1.gadgets = L4_1
L4_1 = {}
L3_1.regions = L4_1
L4_1 = {}
L3_1.triggers = L4_1
L3_1.rand_weight = 100
L1_1[1] = L2_1
L1_1[2] = L3_1
suites = L1_1
