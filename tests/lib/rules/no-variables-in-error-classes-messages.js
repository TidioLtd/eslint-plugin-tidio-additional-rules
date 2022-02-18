/**
 * @fileoverview Disallow using string templates for simple strings
 * @author no-unnecessary-template-strings
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-variables-in-error-classes-messages'),
    RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
    }
});
var ruleTester = new RuleTester();
ruleTester.run('no-variables-in-error-classes-messages', rule, {
    valid: [`new TestError("BYCZQ");`],
    invalid: [
        {
            code:  `new TestError("BYCZQ" + hello);`,
            errors: [
                {
                    message: 'Error type class constructor message should not have any variables.',
                    type: 'ExpressionStatement'
                }
            ]
        },
        {
            code: `new TestError(\`BYCZQ \${elo}\`);`,
            errors: [
                {
                    message: 'Error type class constructor message should not have any variables.',
                    type: 'ExpressionStatement'
                }
            ]
        }
    ]
});
