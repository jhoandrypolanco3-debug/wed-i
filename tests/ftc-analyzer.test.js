const { checkHardwareMapConsistency } = require('../analyzers/ftc-analyzer')

test('Detecta hardwareMap.get', () => {
  const content = 'DcMotor motor = hardwareMap.get(DcMotor.class, "left_drive");'
  const findings = checkHardwareMapConsistency('src/OpMode.java', content)
  expect(findings.length).toBeGreaterThan(0)
  expect(findings[0].id).toBe('FTC-HW-001')
})
