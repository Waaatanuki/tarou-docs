const imgUri = 'https://prd-game-a1-granbluefantasy.akamaized.net/assets/img'
const imgProxyUri = 'https://my-faas.vercel.app/image?url='

export function getLocalImg(prop: string, type = 'common') {
  return new URL(`/src/assets/image/${type}/${prop}.png`, import.meta.url).href
}

export function getOfficialImg(questImage: string) {
  return `${imgUri}${questImage}`
}

export function getProxyImg(questImageUrl: string) {
  return `${imgProxyUri}${questImageUrl}`
}

export function getQuestImg(questImage: string | number, questType = '0') {
  if (String(questImage).startsWith('/sp'))
    return `${imgUri}${questImage}`

  switch (questType) {
    case '0':
      return `${imgUri}/sp/quest/assets/lobby/${questImage}.png`
    case '1':
      return `${imgUri}/sp/assets/summon/qm/${questImage}.png`
    case '3':
      return `${imgUri}/sp/quest/free/assets/stage_thumb/${questImage}.png`
    case '25':
      return `${imgUri}/sp/quest/assets/replicard/${questImage}.png`
    default:
      return `${imgUri}/sp/assets/summon/qm/${questImage}.png`
  }
}

export function getBossImg(type: string, id: string, size = 'm') {
  return `${imgUri}/sp/assets/${type}/${size}/${id}.png`
}

export function getAssetImg(type: string, id: string, size = 'm') {
  return `${imgUri}/sp/assets/${type}/${size}/${id}.jpg`
}

export function getBulletImg(id: string) {
  return `${imgUri}/sp/assets/bullet/s/${id}.jpg`
}

export function getAssetsItemImg(type: string, id: string, size = 's') {
  return `${imgUri}/sp/assets/item/${type}/${size}/${id}.jpg`
}

export function getGachaBanner(key: string) {
  return `${imgUri}/sp/banner/gacha/banner_${key}_1.png`
}

export function getArousalIcon(form: number) {
  return `${imgUri}/sp/ui/icon/arousal_type/type_${form}.png`
}

export function getJobIcon(id: string | number) {
  return `${imgUri}/sp/ui/icon/job/${id}.png`
}

export function getAbilityIcon(id: string) {
  return `${imgUri}/sp/ui/icon/ability/m/${id}.png`
}

export function getSkillIcon(id: string) {
  return `${imgUri}/sp/ui/icon/skill/${id}.png`
}

export function getSkillLabelIcon(id: string) {
  return `${imgUri}/sp/ui/icon/weapon_skill_label/${id}`
}

export function getBonusIcon(id: string) {
  return `${imgUri}/sp/ui/icon/bonus/${id}.png`
}

export function getItemSrc(key: string) {
  const [type, id] = key.split('_')

  switch (type) {
    case '1':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/weapon/m/${id}.jpg`
    case '2':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/summon/m/${id}.jpg`
    case '4':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/item/normal/m/${id}.jpg`
    case '10':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/m/${id}.jpg`
    case '17':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/item/evolution/m/${id}.jpg`
    case '26':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/item/event/defeat/copper/m/${id}.jpg`
    case '27':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/item/event/defeat/silver/m/${id}.jpg`
    case '28':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/item/event/defeat/gold/m/${id}.jpg`
    case '63':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/item/event/defeat/platinum/m/${id}.jpg`
    case '73':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/item/npcaugment/m/${id}.jpg`
    case '82':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/item/event/newdefeat/m/${id.at(-2) === '0' ? 'gold' : 'silver'}.jpg`
    case '85':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/item/event/defeat/diamond/m/${id}.jpg`
    case '88':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/item/bonusstock/m/${id}.jpg`
    case '91':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/shield/m/${id}.jpg`
    case '93':
      return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/familiar/m/${id}.jpg`
    default:
      return ''
  }
}
