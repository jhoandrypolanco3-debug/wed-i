const { checkHardwareMapConsistency } = require('../../analyzers/ftc-analyzer')
const content = 'DcMotor motor = hardwareMap.get(DcMotor.class, "left_drive");\n// hardwareMap.get("fake") in comment'
const findings = checkHardwareMapConsistency('src/OpMode.java', content)
console.log('Findings:', findings)
