/**
 * @file ninjanode powerup definitions.
 */

module.exports = [
  {
    id: 'ghost', // Machine name and base class
    name: "Space Ghost", // Name displayed to user
    rarity: 0.75, // 1 is common, 0 is never spawned
    respawnTime: 120,
    size: 64,
    active: { // Effective time, as soon as it's picked up'
      time: 15,
      cssClass: 'ghost-active'
    },
    end: { // Time at end, removed from effect time
      time: 5,
      cssClass: 'ghost-end'
    },
    skipAlters: {
      collision_ship2ship: function(source, target) {

        if (source.powerUps.list['ghost'] && source.powerUps.list['ghost'].active) {
          return true;
        }

        if (target.powerUps.list['ghost'] && target.powerUps.list['ghost'].active) {
          return true;
        }

        return false;
      }
    }
  },
  {
    id: 'triple', // Machine name and base class
    name: "Triple Shot", // Name displayed to user
    rarity: 0.2, // 1 is common, 0 is never spawned
    respawnTime: 120,
    size: 64,
    active: { // Effective time, as soon as it's picked up'
      time: 15,
      cssClass: 'triple-active'
    },
    end: { // Time at end, removed from effect time
      time: 5,
      cssClass: 'triple-end'
    },
    alters: {
      fire_count: function(def, source) {

        if (source.powerUps.list['triple'] && source.powerUps.list['triple'].active) {
          return 3;
        }

        return def;
      }
    }
  },

  {
    id: 'quint', // Machine name and base class
    name: "Quint Shot", // Name displayed to user
    rarity: 0.9, // 1 is common, 0 is never spawned
    respawnTime: 120,
    size: 64,
    active: { // Effective time, as soon as it's picked up'
      time: 15,
      cssClass: 'quint-active'
    },
    end: { // Time at end, removed from effect time
      time: 5,
      cssClass: 'quint-end'
    },
    alters: {
      fire_count: function(def, source) {
        console.log(source.powerUps);
        if (source.powerUps.list['quint'] && source.powerUps.list['quint'].active) {
          return 5;
        }

        return def;
      }
    }
  }
];
