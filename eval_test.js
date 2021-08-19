interpreter = Interpreter.new
    
# Basic arithmetic
Test.assert_equals(interpreter.input('1 + 1'), 2)
Test.assert_equals(interpreter.input('2 - 1'), 1)
Test.assert_equals(interpreter.input('2 * 3'), 6)
Test.assert_equals(interpreter.input('8 / 4'), 2)
Test.assert_equals(interpreter.input('7 % 4'), 3)

#V ariables
Test.assert_equals(interpreter.input('x = 1'), 1)
Test.assert_equals(interpreter.input('x'), 1)
Test.assert_equals(interpreter.input('x + 3'), 4)
Test.expect_error { interpreter.input('y') }:
