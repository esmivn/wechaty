/**
 *   Wechaty Chatbot SDK - https://github.com/wechaty/wechaty
 *
 *   @copyright 2016 Huan LI (李卓桓) <https://github.com/huan>, and
 *                   Wechaty Contributors <https://github.com/wechaty>.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */
export { generateToken }    from './impure/generate-token.js'
export {
  looseInstanceOfFileBox,
  looseInstanceOfPuppet,
}                           from './pure/loose-instanceof.js'
export { retryPolicy }      from './pure/retry-policy.js'
export {
  digestEmoji,
  plainText,
  stripEmoji,
  stripHtml,
  unescapeHtml,
  unifyEmoji,
}                          from './pure/xml.js'
