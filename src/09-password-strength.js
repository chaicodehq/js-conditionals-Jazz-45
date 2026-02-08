/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if(typeof password!="string" || password.length==0) return "weak";

  var criteria=0;
  var feedback;

  // Check for size
  if(password.length>=8) criteria++;
  
  for(var ch of password){
    if(ch>='a' && ch<='z'){
      criteria++;
      break;
    }
  }

  for(var ch of password){
    if(ch>='A' && ch<='Z'){
      criteria++;
      break;
    }
  }

  for(var ch of password){
    if(ch>='0' && ch<='9'){
      criteria++;
      break;
    }
  }

  for(var ch of "!@#$%^&*()_+-=[]{}|;:,.<>?"){
    if(password.includes(ch)){
      criteria++;
      break;
    }
  }

  if(criteria==5) feedback="very strong";
  else if(criteria==4) feedback="strong";
  else if(criteria>=2) feedback="medium";
  else feedback="weak";

  return feedback;
}
